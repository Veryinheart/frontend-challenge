import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import Post from "./components/Post";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<PostsList />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
      </Routes>
    </>
  );
}

export default App;
