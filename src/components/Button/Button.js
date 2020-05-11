import React, { useState, useEffect } from 'react';
import styles from "./Button.module.css";

const Button = ({
  label,
}) => {
  return (
    <div className={ styles.container }>
      <div className={ styles.text }>{ label }</div>
    </div>
  );
}

export default Button;