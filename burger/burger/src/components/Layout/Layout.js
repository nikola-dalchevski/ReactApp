import React from "react";
import Aux from "../../hoc/Auxx";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <Sidedrawer />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
