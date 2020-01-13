import React from "react";
import classes from "./Drowertoggle.module.css";

const Drowertoggle = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Drowertoggle;
