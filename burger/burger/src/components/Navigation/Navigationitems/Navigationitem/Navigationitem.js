import React from "react";
import classes from "./Navigationitem.module.css";
import { NavLink } from "react-router-dom";

const Navigationitem = props => {
  return (
    <li className={classes.Navigationitem}>
      <NavLink activeClassName={classes.active} exact to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default Navigationitem;
