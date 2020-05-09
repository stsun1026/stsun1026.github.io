import React, { useState, useEffect } from 'react';
import { LargeTile } from '../../components/LargeTile/LargeTile';
import styles from "./HomePage.module.css";
import { linkify } from "../../services/RoutingService"
import useWindowDimensions from "../../services/WindowDimensions";

const MAX_SIZE = 680;
const HomePage = () => {
  const { height, width } = useWindowDimensions();
  const isShrunk = width < MAX_SIZE;
  return(
    <div>
      <div className={ styles.welcome } style={{ textAlign: isShrunk ? "center" : "left", paddingLeft: isShrunk ? 0 : 20 }}>welcome</div>
      <div className={ styles.menuContainer } style={{ width: isShrunk ? width : MAX_SIZE }}>
        { linkify({ component:<LargeTile text="about + contact"/>, route:"/l1" }) }
        { linkify({ component:<LargeTile text="clear the tree"/>, route:"/clear-the-tree" }) }
        { linkify({ component:<LargeTile text="another thing"/>, route:"/l1" }) }
        { linkify({ component:<LargeTile text="thing 3"/>, route:"/l1" }) }
      </div>
    </div>
  )
}

export default HomePage;
