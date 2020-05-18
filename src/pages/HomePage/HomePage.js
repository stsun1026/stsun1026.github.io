import React, { useState, useEffect } from 'react';
import Topbar from "../../components/Topbar/Topbar";
import TopbarDropdown from "../../components/TopbarDropdown/TopbarDropdown";
import MediaBar from "../../components/MediaBar/MediaBar";
import useWindowDimensions from "../../services/WindowDimensions";
import headshot from "../../assets/photo-steven-sun.jfif";
import styles from "./HomePage.module.css";

const SHRINK_PICTURE_WIDTH = 1050;
const MOBILE_VIEW_MAX_WIDTH = 810;
const HomePage = () => {
  const { height, width } = useWindowDimensions();
  const isMobileView = width < MOBILE_VIEW_MAX_WIDTH;
  const getPicWidth = () => {
    if(isMobileView) {
      return 350;
    } else if(width < SHRINK_PICTURE_WIDTH) {
      return 450 - SHRINK_PICTURE_WIDTH + width
    } else {
      return 450;
    }
  }

  return(
    <div className={ styles.container } 
      style={{
        // height: isMobileView ? "auto" : height,
        overflowY: isMobileView ? "auto" : "hidden" 
      }}
    >
      { isMobileView ? <TopbarDropdown/> : <Topbar/> }
      <div 
        className={ styles.contentContainer }
        style={{ 
          height: Math.max(height - 95, 450),
          paddingTop: isMobileView ? 20 : 50
        }}
      >
        <div style={{ display: isMobileView ? "block" : "inline" }}>
          <img src={ headshot }
            className={ styles.photo }
            style={{ width: getPicWidth(), marginTop: isMobileView ? 0 : (450 - getPicWidth) / 4 }}
          />
        </div>
        <div 
          className={ styles.content }
          style={{ paddingLeft: isMobileView ? 0 : 150, paddingTop: isMobileView ? 20 : 50 }}
        >
          <div className={ styles.nameText } style={{ fontSize: isMobileView ? 55 : 65 }}>Steven Sun</div>
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
  )
}

export default HomePage;
