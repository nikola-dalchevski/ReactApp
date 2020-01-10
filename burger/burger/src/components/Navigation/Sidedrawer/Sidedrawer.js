import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import classes from "./Sidedrawer.module.css";

const Sidedrawer = props => {
  return (
    <div className={classes.Sidedrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <Navigationitems />
      </nav>
    </div>
  );
};

export default Sidedrawer;
