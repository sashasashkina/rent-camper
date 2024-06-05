import React from "react";
import css from "./Sidebar.module.css";
import ButtonElement from "../ButtonSitebar/ButtonSidebar";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <div className={css.location}>
        <p>Location</p>
        <input type="text" />
      </div>
      <p>Filters</p>
      <div>
        <p>Vehicle equipment</p>
        <ButtonElement />
      </div>
      <div>
        <p>Vehicle Type</p>
      </div>
      <div>
        <button> search</button>
      </div>
    </div>
  );
};

export default Sidebar;
