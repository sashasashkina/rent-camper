import React from "react";
import css from "./PropertyCard.module.css";
import sprite from "../../svg/symbol-defs.svg";

const PropertyCard = ({ kitchen, beds, automatic, adults, ac, petrol }) => {
  return (
    <ul className={css.propertyCard}>
      <li className={css.cartItem}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-Users1`} />
        </svg>
        {adults} adults
      </li>
      <li className={css.cartItem}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-vilka`} />
        </svg>
        {automatic} automatic
      </li>
      <li className={css.cartItem}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-station`} />
        </svg>
        {petrol}petrol
      </li>
      <li className={css.cartItem}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-noj`} />
        </svg>
        {kitchen} kitchen
      </li>

      <li className={css.cartItem}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-safa`} />
        </svg>
        {beds} beds
      </li>

      <li className={css.cartItem}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-AC`} />
        </svg>
        {ac}AC
      </li>
    </ul>
  );
};

export default PropertyCard;
