import { FaBars } from 'react-icons/fa';
import styles from "./TopbarDropdown.module.css";
import React, { useState } from 'react';
import { linkify } from "../../services/RoutingService"
import Button from "../Button/Button";
// import ReactCSSTransitionGroup from 'react-transition-group';
const TopbarDropdown = ({
}) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const buttonStyle = { width: "100%", borderBottom: "1px solid #CFDCDB" };
  return(
    <div>
      <div className={ styles.iconContainer }>
        <FaBars className={ styles.icon } onClick={() => setOpen(!open)}/>
      </div>
      {
        <div className={ open ? styles.menu : styles.hidden }>
          <Button label="HOME" style={ buttonStyle }/>
          <Button label="EXPERIENCE" style={ buttonStyle }/>
          <Button label="PROJECTS" style={ buttonStyle }/>
          <Button label="PHOTOS" style={ buttonStyle }/>
        </div>
      }
    </div>
  );
}

export default TopbarDropdown;
