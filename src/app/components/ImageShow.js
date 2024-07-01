import React from "react";

const ImageShow = ({ src, style, handleStyles }) => {
  //   console.log(style);

  return (
    <>
      <img onClick={() => handleStyles(src)} src={src} height="150px" />
      <span style={style}>👍</span>
    </>
  );
};

export default ImageShow;
