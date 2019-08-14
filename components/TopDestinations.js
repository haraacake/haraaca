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
      <div className="mt-12 w-4/5 mx-auto text-squid-100">
        <h3 className="text-2xl uppercase font-bold tracking-wide">
          Top Destinations
        </h3>
        <p className="text-lg mt-6">
          Choose from thousands of cars in all major cities and towns in Kenya.
        </p>
        <div className="mt-4">
          {Object.keys(towns).map(key => (
            <TownCard key={key} details={towns[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default FeaturedCars;
