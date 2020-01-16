import React from "react";
import classes from "./Navigationitems.module.css";
import Navigationitem from "./Navigationitem/Navigationitem";

const Navigationitems = props => {
  return (
    <ul className={classes.Navigationitems}>
      <Navigationitem link="/">Burger Builder</Navigationitem>
      <Navigationitem link="/orders">Orders</Navigationitem>
    </ul>
  );
};

export default Navigationitems;
