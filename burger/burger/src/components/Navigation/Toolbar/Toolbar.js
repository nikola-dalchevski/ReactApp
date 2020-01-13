import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import Drowertoggle from "../Sidedrawer/Drowertoggle/Drowertoggle";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <Drowertoggle clicked={props.drawerToggleClicked} />
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
