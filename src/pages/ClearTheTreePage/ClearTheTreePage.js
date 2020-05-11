import React, { useState, useEffect } from 'react';
import styles from "./ClearTheTreePage.module.css";
import { linkify } from "../../services/RoutingService";
import ClearTheTreeGame from "./Game/ClearTheTreeGame";
import useWindowDimensions from "../../services/WindowDimensions";

const ClearTheTreePage = () => {
  const { height, width } = useWindowDimensions();
  return(
    <div>
      <ClearTheTreeGame gameWidth={ width }/>
    </div>
  )
}

export default ClearTheTreePage;
