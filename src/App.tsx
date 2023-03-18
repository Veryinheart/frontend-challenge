import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import Header from "./components/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Header />
        <Routes>
          <Route path="/" element={<PostsList />}></Route>
          <Route path="/posts/:id" element={<Post />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
