import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostList extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const posts = await this.loadData();
    this.setState({
      posts
    });
  }

  loadData = async () => {
    const url = "http://localhost:9000/posts/all";
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>Blog Posts</h2>
        <ul>
          {posts.map(post => {
            return (
              <li key={`post-${post.id}`}>
                <Link to={`/posts/${post.id}`}>
                  {post.title} - Written By : {post.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PostList;
