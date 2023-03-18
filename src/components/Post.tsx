import { useParams } from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail";
import { Typography } from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const { isLoading, post } = usePostDetail(id!);

  return isLoading ? (
    <p className="center">Loading Post...</p>
  ) : (
    <>
      <Typography variant="h5">
        Title: <br />
        {post?.title}
      </Typography>
      <br />
      <Typography variant="body1">
        Post body: <br />
        {post?.body}
      </Typography>
    </>
  );
};

export default Post;
