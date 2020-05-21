import React from 'react';
import Topbar from "../../components/Topbar/Topbar";
import TopbarDropdown from "../../components/TopbarDropdown/TopbarDropdown";
import useWindowDimensions from "../../services/WindowDimensions";
import styles from "./UnderConstructionPage.module.css";
import { FaWrench } from 'react-icons/fa';

const MOBILE_VIEW_MAX_WIDTH = 600;
const UnderConstructionPage = () => {
  const { height, width } = useWindowDimensions();
  const isMobileView = width < MOBILE_VIEW_MAX_WIDTH;

  return(
    <div className={ styles.container }>
      { isMobileView ? <TopbarDropdown/> : <Topbar/> }
      <div className={ styles.contentContainer } style={{ height: height - 45 }}>
        <FaWrench className={ styles.wrench }/>
        Under Construction!
      </div>
    </div>
  )
}

export default UnderConstructionPage;
