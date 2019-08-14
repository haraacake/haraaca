import React from 'react';

const TownCard = props => {
  const { details } = props;
  return (
    <div className="antialiased flex shadow-md mt-6 rounded">
      <div>
        <img
          src={details.image}
          alt={details.title}
          className="overflow-hidden rounded-l"
        />
      </div>
      <div className="ml-3 mt-2">
        <p className="font-semibold uppercase tracking-wide text-lg">
          {details.title}
        </p>
        <p className="p-0 uppercase tracking-wide text-sm text-gray-600 font-semibold">
          {details.price} Cars
        </p>
      </div>
    </div>
  );
};

export default TownCard;
