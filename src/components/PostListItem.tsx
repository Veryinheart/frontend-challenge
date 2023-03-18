import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Post } from "../typings/types";

const PostListItem = React.forwardRef(({ post }: { post: Post }, ref) => {
  const postListBody = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <br />
        <Typography
          sx={{ mb: 1.5, fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Post ID : {post.id}
        </Typography>
      </CardContent>
    </>
  );

  const content = ref ? (
    <Card ref={ref as React.RefObject<HTMLDivElement>} sx={{ minWidth: 275 }}>
      {postListBody}
    </Card>
  ) : (
    <Card sx={{ minWidth: 275 }}>{postListBody}</Card>
  );

  return (
    <Box
      sx={{
        margin: "1rem",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {content}
    </Box>
  );
});

export default PostListItem;
