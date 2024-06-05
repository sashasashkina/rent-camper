import css from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const MainMenu = () => {
  return (
    <ul className={css.menu}>
      <li>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/favorites">
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default MainMenu;
