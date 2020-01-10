import React from "react";
import classes from "./Modal.module.css";
import Auxx from "../../../hoc/Auxx";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  return (
    <Auxx>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translate(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Auxx>
  );
};

export default Modal;
