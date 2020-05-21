import React from 'react';
import styles from "./Topbar.module.css";
import { linkify } from "../../services/RoutingService"
import Button from "../Button/Button";
const Topbar = ({
  children, 
}) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.leading }>
      { linkify({ component: <Button label="HOME"/>, route: "/" }) }
      </div>
      <div className={ styles.trailing }>
        { linkify({ component: <Button label="EXPERIENCE"/>, route: "/experience" }) }
        { linkify({ component: <Button label="PROJECTS"/>, route: "/projects" }) }
        { linkify({ component: <Button label="PHOTOS"/>, route: "/photos" }) }
      </div>
    </div>
  );
}

export default Topbar;
