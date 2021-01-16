import React from "react";

const Complete = props => {
  let classes = "fa fa-calendar-check-o fa-lg";
  if (!props.completed) classes = "fa fa-calendar-times-o fa-lg";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Complete;
