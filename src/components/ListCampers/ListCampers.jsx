import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataCamperThunk } from "../../redux/camperThunk";
import { selectGetData } from "../../redux/selector";
import Card from "./Card";
import css from "./ListCampers.module.css";

const ListCampers = () => {
  const dispatch = useDispatch();
  const camperItem = useSelector(selectGetData);

  useEffect(() => {
    dispatch(getDataCamperThunk());
  }, [dispatch]);

  return (
    <div className={css.camper}>
      {camperItem?.map((item, index) => (
        <div key={index}>
          <Card camper={item} />
        </div>
      ))}
    </div>
  );
};

export default ListCampers;
