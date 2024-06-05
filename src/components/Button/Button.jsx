import React from "react";
import css from "./Button.module.css";

export function BtnLoadMore({ onClick }) {
  return (
    <div className={css.BtnLoadMoreWra}>
      <button className={`${css.BtnLoadMore} `} onClick={onClick}>
        Show more
      </button>
    </div>
  );
}
