import React from "react";
import axioss from "../../axioss";
import Post from "../../components/Post/Post";
import "./Posts.css";
import { Link, Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axioss
      .get("/posts")
      .then(res => {
        const posts = res.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });

        this.setState({ posts: updatedPosts });

        console.log(res);
      })
      .catch(err => {
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.props.history.push({ pathname: "/posts/" + id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link key={post.id} to={"/posts/" + post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
