import React, { useEffect, useState  } from 'react';
import Topbar from "../../components/Topbar/Topbar";
import TopbarDropdown from "../../components/TopbarDropdown/TopbarDropdown";
import MediaBar from "../../components/MediaBar/MediaBar";
import useWindowDimensions from "../../services/WindowDimensions";
import headshot from "../../assets/photo-steven-sun.jfif";
import styles from "./HomePage.module.css";

const MOBILE_VIEW_MAX_WIDTH = 600;
const HomePage = () => {
  const { height, width } = useWindowDimensions();
  const [isRendered, setIsRendered] = useState(false);
  const isMobileView = width < MOBILE_VIEW_MAX_WIDTH;

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return(
    <div className={ styles.container }>
      { isMobileView ? <TopbarDropdown/> : <Topbar/> }
      <div className={ styles.contentContainer } style={{ height: height - 45 }}>
        <div className={ isRendered ? styles.content : styles.contentBeforeAnimation }>
          <img src={ headshot } className={ styles.photo }/>
          <div style={{ fontSize: isMobileView ? 55 : 65 }}>Steven Sun</div>
          <div className={ styles.intro }>
            Software developer making the transition from intern to full time, 
            passionate about full stack web development. Using this website 
            to learn frontend and design.
          </div>
          <div className={ styles.mediaBar }><MediaBar/></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
