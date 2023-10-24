import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Nav from "./Components/Nav";
import SingleArticle from "./Components/SingleArticle";
import AllComments from "./Components/AllComents";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles/*" element={<Articles />}></Route>
        <Route
          path="/articles/:article_id/*"
          element={<SingleArticle />}
        ></Route>
        <Route
          path="/articles/:article_id/comments"
          element={<AllComments />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
