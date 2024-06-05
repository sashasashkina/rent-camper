import React from "react";
import { useDispatch } from "react-redux";

import { setModalStatus } from "../../redux/camperSlice";

const ButtonComponent = () => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(setModalStatus(true));
  };
  return <button onClick={handleButtonClick}>Show more</button>;
};

export default ButtonComponent;
