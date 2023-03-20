import { useParams } from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail";
import { Typography, Card, CardContent, Skeleton } from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const { isLoading, post } = usePostDetail(id!);

  return (
    <>
      <Card>
        <CardContent>
          {isLoading ? (
            <>
              <Skeleton
                animation="wave"
                height={20}
                style={{ marginBottom: 6 }}
                width="20%"
              />
              <Skeleton animation="wave" height={20} width="90%" />
            </>
          ) : (
            <Typography variant="h5">
              Title: <br />
              {post?.title}
            </Typography>
          )}

          <br />
          {isLoading ? (
            <>
              <Skeleton
                animation="wave"
                height={15}
                style={{ marginBottom: 6 }}
                width="20%"
              />
              <Skeleton animation="wave" height={15} width="90%" />
            </>
          ) : (
            <Typography variant="body1">
              Post body: <br />
              {post?.body}
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
