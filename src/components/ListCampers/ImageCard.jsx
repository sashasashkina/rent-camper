import React from "react";
import css from "./imageCard.module.css";

const ImageCard = ({ src, alt }) => {
  return (
    <div className={css.imgCard}>
      <img className={css.cardImg} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
