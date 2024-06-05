import React from "react";
import css from "./CatalogePage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import ListCampers from "../../components/ListCampers/ListCampers";

const CatalogePage = () => {
  return (
    <div className={css.container}>
      <Sidebar />
      <ListCampers />
    </div>
  );
};

export default CatalogePage;
