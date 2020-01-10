import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <Navigationitems />
      </nav>
    </header>
  );
};

export default Toolbar;
