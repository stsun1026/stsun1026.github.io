import React from "react";
import { NavLink } from "react-router-dom";

function linkify({
  component,
  route,
  style = { textDecoration: "none", color: "white" }
}) {
  return (<NavLink to={ route } style={ style }>{ component }</NavLink>);
}

export { linkify };