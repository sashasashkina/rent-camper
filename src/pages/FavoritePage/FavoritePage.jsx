import css from "./FavoritePage.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCamperThunk } from "../../redux/camperThunk";
import { selectGetData } from "../../redux/selector";

import Card from "../../components/ListCampers/Card";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const camperItem = useSelector(selectGetData);

  const favoriteItem = camperItem?.filter((item) => item.favorites === true);

  useEffect(() => {
    dispatch(getDataCamperThunk());
  }, [dispatch]);

  return (
    <div>
      <div className={css.camper}>
        {favoriteItem.map((item, index) => (
          <div key={index}>
            <Card camper={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
