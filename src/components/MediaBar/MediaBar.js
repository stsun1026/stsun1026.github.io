import React, { useState, useEffect } from 'react';
import styles from "./MediaBar.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const MediaBar = ({
  children, 
}) => {
  return (
    <div 
      className={ styles.container }
    >
      <a className={ styles.link } href="https://github.com/stsun1026" target="_blank"><FaGithub/></a>
      <a className={ styles.link } href="https://www.linkedin.com/in/steven-sun-195542145/" target="_blank"><FaLinkedin/></a>
      <a className={ styles.link } href="mailto:stevensun1026@gmail.com" target="_blank"><FaEnvelope/></a>
      <a className={ styles.link } href="https://twitter.com/stsun16" target="_blank"><FaTwitter/></a>
    </div>
  );
}

export default MediaBar;
