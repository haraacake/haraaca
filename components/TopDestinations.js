import React, { Component } from 'react';

import TownCard from './TownCard';

class FeaturedCars extends Component {
  // Temp State for UI: Values Should come from db
  state = {
    towns: {
      town1: {
        title: `Nairobi`,
        price: '1900',
        image: '/static/nairobi.png',
      },
      town2: {
        title: `Mombasa`,
        price: '1190',
        image: '/static/mombasa.png',
      },
      town3: {
        title: `Kisumu`,
        price: '809',
        image: '/static/kisumu.png',
      },
    },
  };

  render() {
    const { towns } = this.state;
    return (
      <div className="mt-12 lg:mt-16 w-4/5 md:w-5/6 mx-auto text-squid-100">
        <h3 className="text-2xl uppercase font-bold tracking-wide">
          Top Destinations
        </h3>
        <p className="text-lg mt-3 md:mt-0">
          Choose from thousands of cars in all major cities and towns in Kenya.
        </p>
        <div className="mt-8 md:mt-6 md:flex md:justify-between">
          {Object.keys(towns).map(key => (
            <TownCard key={key} details={towns[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default FeaturedCars;
