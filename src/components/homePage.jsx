import React, { Component } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1> Blog Home Page</h1>
      <Link to="/posts">Posts</Link>
    </>
  );
};

export default HomePage;
