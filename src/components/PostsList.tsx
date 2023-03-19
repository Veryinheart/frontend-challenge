import { useState, useRef, useCallback } from "react";
import usePosts from "../hooks/usePosts";
import PostListItem from "./PostListItem";
import { Link, Box, Typography } from "@mui/material";

const PostsList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    posts: postLists,
    isLoading,
    isError,
    error,
    hasNextPage,
  } = usePosts(pageNumber);

  const intObserver = useRef<IntersectionObserver | null>();
  const lastPostRef = useCallback(
    (post: Element) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();
      //assign observer to the  post
      intObserver.current = new IntersectionObserver((posts) => {
        console.log("this is entry", posts);

        if (posts[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          setPageNumber((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p>Error : {error?.message}</p>;

  const content = postLists.map((post, i) => {
    if (postLists.length === i + 1) {
      return (
        <Link href={`/posts/${post.id}`} underline="none" key={post.id}>
          <PostListItem ref={lastPostRef} post={post} />
        </Link>
      );
    }
    return (
      <Link href={`/posts/${post.id}`} underline="none" key={post.id}>
        <PostListItem post={post} />
      </Link>
    );
  });

  return (
    <>
      {content}
      <br />
      {isLoading && (
        <Typography variant="body1" sx={{ color: "whitesmoke" }}>
          Loading More Posts...
        </Typography>
      )}
      <Box sx={{ margin: "1rem" }}>
        <Link href="#top" underline="none">
          <Typography variant="button" sx={{ color: "whitesmoke" }}>
            Back to Top
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default PostsList;
