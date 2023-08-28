import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    // Here props is accessed via an onClick event that will activate the
    // function it's pointing to. In this case it will show the cart.
    // Here's where it travels: App.js > Header.js > HeaderCartButton.js
    <button
      className={classes.button}
      onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
