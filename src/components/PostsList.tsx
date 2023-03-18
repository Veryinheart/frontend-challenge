import { useState, useRef, useCallback } from "react";
import usePosts from "../hooks/usePosts";
import PostListItem from "./PostListItem";
import { Link } from "@mui/material";

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
      //console.log("what is this post?", post);
      if (isLoading) return;
      //console.log("what is this ref current", intObserver.current);
      if (intObserver.current) intObserver.current.disconnect();
      //reassign a new observer to the last post
      intObserver.current = new IntersectionObserver((posts) => {
        console.log("this is entry", posts);

        if (posts[0].isIntersecting && hasNextPage) {
          //console.log("first one", post[0].isIntersecting);
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
      {isLoading && <p className="center">Loading More Posts...</p>}
      <p>
        <Link href="#top">Back to Top</Link>
      </p>
    </>
  );
};

export default PostsList;
