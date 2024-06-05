import React from 'react';
import css from './TitleCard.module.css';
import sprite from '../../svg/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { updateFavoriteThunk } from '../../redux/camperThunk';

const TitleCard = ({ name, price, camper }) => {
  const dispatch = useDispatch();

  const result = camper => {
    return !camper.favorites;
  };
  const favoriteClick = () => {
    dispatch(
      updateFavoriteThunk({
        params: { ...camper, favorites: result(camper) },
      })
    );
  };
  return (
    <div className={css.titleCard}>
      <h2 className={css.nameCard}>{name}</h2>
      <div className={css.titleHeader}>
        <h2 className={css.namePrice}>€{price?.toFixed(2)}</h2>
        <button
          className={css.heardButton}
          onClick={() => favoriteClick(camper)}
        >
          {camper.favorites ? (
            <svg className={`${css.icon} `}>
              <use href={`${sprite}#icon-heard-red `} />
            </svg>
          ) : (
            <svg className={`${css.icon} `}>
              <use href={`${sprite}#icon-heard `} />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default TitleCard;
