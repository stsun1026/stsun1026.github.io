import React, { useState, useEffect } from 'react';
import styles from "./Transition.module.css";

const Transition = ({
  children
}) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div className={ isRendered ? styles.transition : styles.hidden }>
      { children } 
    </div>
  );
}

export default Transition;
