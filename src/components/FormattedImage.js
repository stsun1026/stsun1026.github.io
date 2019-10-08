import React, { useState } from "react";
import ReactDOM from "react-dom";

const FormattedImage = ({
  image,
  sizeRatio = 1
}) => {
  const [width, setWidth] = useState(window.innerWidth * sizeRatio);
  const resize = () =>{
    setWidth(window.innerWidth* sizeRatio);
  }
  window.addEventListener("resize", resize.bind());
  return(
    <img src={image} width={width}></img>
  );

}


export default FormattedImage;