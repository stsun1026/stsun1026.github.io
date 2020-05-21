import { FaBars } from 'react-icons/fa';
import styles from "./TopbarDropdown.module.css";
import React, { useState } from 'react';
import { linkify } from "../../services/RoutingService"
import Button from "../Button/Button";
// import ReactCSSTransitionGroup from 'react-transition-group';
const TopbarDropdown = ({
}) => {
  const [open, setOpen] = useState(false);
  const buttonStyle = { width: "100%", borderBottom: "1px solid #CFDCDB" };
  return(
    <div>
      <div className={ styles.iconContainer }>
        <FaBars className={ styles.icon } onClick={() => setOpen(!open)}/>
      </div>
      {
        <div className={ open ? styles.menu : styles.hidden } onClick={() => setOpen(false)}>
          { linkify({ component: <Button label="HOME" style={ buttonStyle }/>, route: "/" }) }
          { linkify({ component: <Button label="EXPERIENCE" style={ buttonStyle }/>, route: "/experience" }) }
          { linkify({ component: <Button label="PROJECTS" style={ buttonStyle }/>, route: "/projects" }) }
          { linkify({ component: <Button label="PHOTOS" style={ buttonStyle }/>, route: "/photos" }) }
        </div>
      }
    </div>
  );
}

export default TopbarDropdown;
