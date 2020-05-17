import React, { useState, useEffect } from 'react';
import styles from "./Button.module.css";

const Button = ({
  label,
  style,
}) => {
  return (
    <div className={ styles.container } style={ style }>
      <div className={ styles.text }>{ label }</div>
    </div>
  );
}

export default Button;