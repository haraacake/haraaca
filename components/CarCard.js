/* eslint-disable react/prop-types */
import React from 'react';

const CarCard = props => {
  const { details } = props;
  return (
    <div className="antialiased mt-8 md:mt-4 md:p-2">
      <div>
        <img
          className="rounded md:w-64 md:h-32 xl:w-auto xl:h-auto object-cover"
          src={details.image}
          alt={details.title}
        />
      </div>
      <div className="text-center mt-3 leading-tight">
        <p className="font-bold uppercase tracking-wide text-lg">
          {details.title} <span className="text-xs">&bull; {details.year}</span>
        </p>
        <p>
          {details.price} KES <span className="text-sm">/ day</span>
        </p>
      </div>
    </div>
  );
};

export default CarCard;
