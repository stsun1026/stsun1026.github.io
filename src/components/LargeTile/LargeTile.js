import React, { useState, useEffect } from 'react';
import styles from "./LargeTile.module.css";

const LargeTile = ({
  text = ""
}) => {
  return (
    <div className={ styles.rectangle }>
      <div className = {styles.textPadding }>{ text }</div>
    </div>
  );
}

export { LargeTile };