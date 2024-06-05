import React from 'react';
import DetailsCard from './DetailsCard';

import PropertyCard from './PropertyCard';
import TitleCard from './TitleCard';
// import { BtnLoadMore  from "../Button/Button";
import css from './Card.module.css';
import ButtonComponent from '../ButtonModal/ButtonModal';

const Card = ({ camper }) => {
  const {
    _id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    details,
    adults,
    transmission,
    engine,
  } = camper;

  return (
    <div className={css.card} key={_id}>
      <img
        className={css.img}
        src={gallery[0]}
        alt={name}
        width={290}
        height={310}
        border-radius={10}
      />

      <div className={css.cardImg}>
        <TitleCard camper={camper} name={name} price={price} />
        <DetailsCard rating={rating} reviews={reviews} location={location} />
        <div>
          <p className={css.description}>{description}</p>
        </div>
        <PropertyCard
          adults={adults}
          transmission={transmission}
          engine={engine}
          details={details}
        />
        <ButtonComponent />
        {/* <BtnLoadMore /> */}
      </div>
    </div>
  );
};

export default Card;
