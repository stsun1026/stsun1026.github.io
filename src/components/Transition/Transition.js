import React, { useState, useEffect } from 'react';
import styles from "./Transition.module.css";

const Transition = ({
  children,
  delay = 0,
}) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  return (
    <div className={ isRendered ? styles.transition : styles.hidden } style={{ transitionDelay: `${delay}s` }}>
      { children } 
    </div>
  );
}

export default Transition;
