import React from 'react';
import styles from "./Tree.module.css";

const Tree = ({
  contentList = [],
  isGreen = true,
}) => {
  const activeContent = contentList.length === 0 ? <div></div> :
    <div className={ isGreen ? styles.green : styles.red }>{ contentList[0] }</div>
  const restOfContent = 
    contentList.slice(1).map(content =><div className={ styles.trunk }>{ content }</div>);
  return (
    <div className={ styles.container }>
      <div className = {styles.tree }>
        <div className={ styles.leaves }></div>
        <div>{ [activeContent, ...restOfContent] }</div>
      </div>
    </div>
  );
}

export { Tree };