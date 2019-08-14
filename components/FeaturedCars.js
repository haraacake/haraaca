import React, { Component } from 'react';

import CarCard from './CarCard';

class FeaturedCars extends Component {
  // Temp State for UI: Values Should come from db
  state = {
    cars: {
      car1: {
        title: `BMW SPORTS CAR`,
        year: '2016',
        price: '1500',
        image: '/static/car.png',
      },
      car2: {
        title: `Chevrolet Corvette`,
        year: '2018',
        price: '2100',
        image: '/static/car.png',
      },
      car3: {
        title: `Porsche 911`,
        year: '2017',
        price: '2900',
        image: '/static/car.png',
      },
    },
  };

  render() {
    const { cars } = this.state;
    return (
      <div className="mt-12 w-4/5 mx-auto text-squid-100">
        <h3 className="text-2xl uppercase tracking-wide font-bold">
          Featured Cars
        </h3>
        <div>
          {Object.keys(cars).map(key => (
            <CarCard key={key} details={cars[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default FeaturedCars;
