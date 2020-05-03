import React, { useState, useEffect } from 'react';
import { LargeTile } from '../../components/LargeTile/LargeTile';
import styles from "./ClearTheTreePage.module.css";
import { linkify } from "../../services/RoutingService";
import ClearTheTreeGame from "./Game/ClearTheTreeGame";
const ClearTheTreePage = () => {
  return(
    <div>
      <ClearTheTreeGame/>
    </div>
  )
}

export default ClearTheTreePage;
