import React from 'react';
import Topbar from "../../components/Topbar/Topbar";
import TopbarDropdown from "../../components/TopbarDropdown/TopbarDropdown";
import MediaBar from "../../components/MediaBar/MediaBar";
import Transition from "../../components/Transition/Transition";
import useWindowDimensions from "../../services/WindowDimensions";
import styles from "./ExperiencePage.module.css";


const MOBILE_VIEW_MAX_WIDTH = 600;
const ExperiencePage = () => {
  const { height, width } = useWindowDimensions();
  const isMobileView = width < MOBILE_VIEW_MAX_WIDTH;
  const line = <div style={{ height: 50, width: 0, borderLeft: "2px solid gray" }}></div>

  return(
    <div className={ styles.container }>
      { isMobileView ? <TopbarDropdown/> : <Topbar/> }
      <div className={ styles.banner }>
        <Transition>
          <div className={ styles.bannerTitle } style={{ fontSize: isMobileView ? 60 : 70}}>
            My Timeline
          </div>
          <div>Actively seeking full-time roles in 2021</div>
        </Transition>
      </div>
      <Transition delay={ 0.3 }>
        <div className={ styles.contentContainer }>
          <div className={ styles.row }>
            <div className={ styles.rowTitle }>Amazon</div>
            <div className={ styles.rowSubtitle }>Software Development Intern - 2020 Summer (Upcoming)</div>
          </div>
          { line }
          <div className={ styles.row }>
            <div className={ styles.rowTitle }>Clio</div>
            <div className={ styles.rowSubtitle }>Software Development Intern - 2020 Winter</div>
            <div className={ styles.rowBody }>
              Full stack development working on Clio’s flagship product, Manage.
              Team responsible for customer-facing business insights tools and
              reporting. <br/><b>Ruby on Rails</b>
            </div>
          </div>
          { line }
          <div className={ styles.row }>
            <div className={ styles.rowTitle }>HSBC</div>
            <div className={ styles.rowSubtitle }>Software Development Intern - 2019</div>
            <div className={ styles.rowBody }>
              Mobile development of a new HSBC Stock Trading App and front end
              development on internal name search tool.
              <br/><b>Flutter, React</b>
            </div>
          </div>
        </div>
        <MediaBar/>
      </Transition>
    </div>
  )
}

export default ExperiencePage;
