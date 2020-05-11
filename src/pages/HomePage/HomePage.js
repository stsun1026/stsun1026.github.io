import React, { useState, useEffect } from 'react';
import Topbar from "../../components/Topbar/Topbar";
import MediaBar from "../../components/MediaBar/MediaBar";
import useWindowDimensions from "../../services/WindowDimensions";
import headshot from "../../assets/photo-steven-sun.jfif";
import styles from "./HomePage.module.css";

const MAX_SIZE = 680;
const HomePage = () => {
  const { height, width } = useWindowDimensions();
  const isShrunk = width < MAX_SIZE;
  return(
    <div style={{ width: width, height: height}}>
      <Topbar/>
      <div className={ styles.contentContainer } style={{ height: Math.max(height - 42,   510)}}>
        <div style={{ paddingTop: 50 }}>
          <img src={ headshot } className={ styles.photo }></img>
          <div className={ styles.content }>
            <div className={ styles.nameText }>Steven Sun</div>
            <p style={{ fontSize: 20 }}>
              Software developer making the transition from intern to full time, 
              passionate about full stack web development, and using this website 
              to learn frontend and design.
            </p>
            <div className={ styles.mediaBar }>
              <MediaBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
