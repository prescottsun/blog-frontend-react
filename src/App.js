import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./components/homePage";
import PostList from "./components/postList";
import BlogPost from "./components/blogPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={PostList} />
        <Route path="/posts/:post_id" component={BlogPost} />
      </Router>
    </div>
  );
}

export default App;
