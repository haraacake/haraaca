import React from 'react';

const CarCard = props => {
  const { details } = props;
  return (
    <div className="antialiased mt-10">
      <div>
        <img className="rounded" src={details.image} alt={details.title} />
      </div>
      <div className="text-center mt-3 leading-tight">
        <p className="font-bold uppercase tracking-wide">
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
