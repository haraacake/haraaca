/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';

import Nav from '../../components/Nav';
import Search from '../../components/Search';
import CarCard from '../../components/CarCard';
import Footer from '../../components/Footer';

class Minivans extends Component {
  state = {
    car: {
      type: 'Minivans',
      topCars: {
        car1: {
          title: `Tesla Model 3`,
          year: '2019',
          price: '1500',
          image: '/static/tesla-model3.jpg',
        },
        car3: {
          title: `Jaguar Ftype`,
          year: '2019',
          price: '5900',
          image: '/static/jaguar-ftype.jpg',
        },
        car6: {
          title: `Honda Accord`,
          year: '2017',
          price: '4950',
          image: '/static/honda-accord.jpg',
        },
        car2: {
          title: `Chevrolet`,
          year: '2018',
          price: '2100',
          image: '/static/chevrolet.jpg',
        },
        car4: {
          title: `Ford Mutang`,
          year: '2014',
          price: '3500',
          image: '/static/ford-mutang.jpg',
        },
        car5: {
          title: `Toyota Prius`,
          year: '2011',
          price: '2400',
          image: '/static/toyota-prius.jpg',
        },
      },
    },
  };

  render() {
    const { car } = this.state;
    const { topCars } = car;

    return (
      <>
        <div>
          <Nav />
          <div className="pt-48 md:pt-56 w-11/12 mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center leading-tight">
              {car.type} for rental
            </h1>
            <div className="md:w-9/12 mx-auto">
              <Search />
            </div>
          </div>
          <div className="w-11/12 mx-auto mt-10 md:mt-16">
            <h2 className="text-4xl font-bold leading-tight">
              Book Perfect {car.type}
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between flex-wrap mt-4">
              {Object.keys(topCars).map(key => (
                <Link href="/car">
                  <a className="md:w-1/3">
                    <CarCard key={key} details={topCars[key]} />
                  </a>
                </Link>
              ))}
              <div className="mt-8 flex justify-center">
                <button
                  className="btn text-white font-bold tracking-wide uppercase"
                  type="button"
                >
                  see more {car.type}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Minivans;
