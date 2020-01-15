import React from "react";
import classes from "./CkeckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../Ui/Button/Button";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
