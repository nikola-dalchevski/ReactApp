import React, { Component } from "react";
import Posts from "../../components/Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
//import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import asyncComponent from "../../hoc/asyncComponent";
const AsyncNewPost = asyncComponent(() => {
  return import("../../components/NewPost/NewPost");
});
class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/posts/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true;"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <p>not found</p>} />
          {/* <Redirect from="/" to="/posts/" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
