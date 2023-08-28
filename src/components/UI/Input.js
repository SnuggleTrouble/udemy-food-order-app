import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* The spread operator ensures that all the key value pairs in
       this input object which we receive on props.input are added as
        props to input. So if the input object receives a {type: "text"},
        the spread operator will ensure that it is added. It's a convenient
        way of making this input highly configurable from outside this
        component through the input prop. Since the spread operator receives
        all the needed props, we don't need to add them manually; such as the id.
        See MealItemForm.js on how it is passed to this component.*/}
      <input
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;
