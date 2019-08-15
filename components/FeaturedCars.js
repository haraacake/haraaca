import React, { Component } from 'react';

import CarCard from './CarCard';

class FeaturedCars extends Component {
  // Temp State for UI: Values Should come from db
  state = {
    cars: {
      car1: {
        title: `BMW 18`,
        year: '2016',
        price: '1500',
        image: '/static/bmw.jpg',
      },
      car2: {
        title: `Chevrolet`,
        year: '2018',
        price: '2100',
        image: '/static/chevrolet.jpg',
      },
      car3: {
        title: `Porsche 911`,
        year: '2017',
        price: '2900',
        image: '/static/porsche.jpg',
      },
    },
  };

  render() {
    const { cars } = this.state;
    return (
      <div className="mt-16 lg:mt-20 w-4/5 md:w-5/6 m-3 mx-auto text-squid-100">
        <h3 className="text-2xl uppercase tracking-wide font-bold">
          Featured Cars
        </h3>
        <div className="flex flex-col md:flex-row md:justify-between">
          {Object.keys(cars).map(key => (
            <CarCard key={key} details={cars[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default FeaturedCars;
