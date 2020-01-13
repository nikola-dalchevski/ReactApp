import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../Navigationitems/Navigationitems";
import classes from "./Sidedrawer.module.css";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import Auxx from "../../../hoc/Auxx";

const Sidedrawer = props => {
  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  return (
    <Auxx>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <Navigationitems />
        </nav>
      </div>
    </Auxx>
  );
};

export default Sidedrawer;
