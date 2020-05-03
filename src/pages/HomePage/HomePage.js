import React, { useState, useEffect } from 'react';
import { LargeTile } from '../../components/LargeTile/LargeTile';
import styles from "./HomePage.module.css";
import { linkify } from "../../services/RoutingService"
const HomePage = () => {
  return(
    <div>
      <div className= { styles.welcome }>welcome</div>
      <div className={ styles.menuContainer }>
        { linkify({ component:<LargeTile text="about + contact"/>, route:"/l1" }) }
        { linkify({ component:<LargeTile text="clear the pipe"/>, route:"/clear-the-pipe" }) }
        { linkify({ component:<LargeTile text="another thing"/>, route:"/l1" }) }
        { linkify({ component:<LargeTile text="thing 3"/>, route:"/l1" }) }
      </div>
    </div>
  )
}

export default HomePage;
