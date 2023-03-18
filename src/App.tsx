import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import Header from "./components/Header";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={10} md={10} lg={6}>
          <Header />
          <Routes>
            <Route path="/" element={<PostsList />}></Route>
            <Route path="/posts/:id" element={<Post />}></Route>
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
