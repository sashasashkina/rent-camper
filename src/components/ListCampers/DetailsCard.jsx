import React from "react";
import sprite from "../../svg/symbol-defs.svg";
import css from "./DetailsCard.module.css";

const DetailsCard = ({ rating, reviews, location }) => {
  return (
    <div className={`${css.formPrice} ${css.price}`}>
      <span>
        ⭐
        <span className={css.formRating}>
          {rating} ({reviews?.length} Reviews)
        </span>
      </span>
      <div className={css.rating}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-location`} />
        </svg>
        {location}
      </div>
    </div>
  );
};

export default DetailsCard;
