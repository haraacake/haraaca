import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import Time from '../components/Time';
import FeaturedCars from '../components/FeaturedCars';

import 'react-datepicker/dist/react-datepicker.css';

class Car extends Component {
  state = {
    host: {
      first_name: 'John',
      last_name: 'Doe',
      image: '',
      stars: '5',
    },
    car: {
      title: `Chevrolet Corvette`,
      year: '2018',
      price: '2100',
      stars: '5',
      trips: '23',
      image: '/static/chevrolet.jpg',
      headImage: '/static/chevrolet-head.jpg',
    },
    likecars: {
      car3: {
        title: `Porsche 911`,
        year: '2017',
        price: '2900',
        image: '/static/porsche.jpg',
      },
    },
  };

  render() {
    const { car } = this.state;
    const { host } = this.state;
    const { likecars } = this.state;

    return (
      <>
        <div>
          <Nav />
          <div className="pt-24 md:pt-20">
            <img className="object-cover" src={car.headImage} alt="" />
          </div>
        </div>
        <div className="w-11/12 mt-6 md:w-5/6 mx-auto text-squid-200 ">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="mt-3">
                <h1 className="text-2xl font-bold tracking-wider uppercase tracking-wide truncate">
                  {car.title}
                  <span className="text-sm"> &bull; {car.year}</span>
                </h1>
              </div>
              <div className="mt-0">
                <p className="text-lg font-bold">
                  {car.price} KES{' '}
                  <span className=" mt-0 pt-0 text-sm">per day</span>
                </p>
              </div>
              <div>
                <p>{car.trips} Trips</p>
              </div>
              <div className="mt-8 hidden lg:block">
                <h3 className="uppercase font-bold">Description</h3>
                <p className="mt-2">
                  Experience the latest that Chevrolet has to offer. This 2019
                  Corvette will make your experience unforgettable. Not only
                  will you turn heads, but the adrenaline that results from the
                  power of this car will excite even the most seasoned drivers.
                  Want to drive along the coast and feel the refreshing breeze?
                  No problem, you can remove the top to turn the car into a
                  convertible!
                </p>
              </div>
            </div>
            <div className="mt-4 lg:ml-20">
              <form className="w-full">
                <div className="flex">
                  <div className="flex flex-col mt-2">
                    <label
                      htmlFor="from"
                      className="text-sm text-gray-600 font-bold"
                    >
                      Trip Start
                    </label>
                    <DatePicker
                      className="w-full outline-none border-b mb-2"
                      id="from"
                      placeholderText="Pick a date"
                    />
                  </div>
                  <div className="flex flex-col mt-3 outline-none text-gray-600">
                    <Time className="" />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col mt-2">
                    <label
                      htmlFor="from"
                      className="text-sm text-gray-600 font-bold"
                    >
                      Trip End
                    </label>
                    <DatePicker
                      className="w-full outline-none border-b mb-2"
                      id="from"
                      placeholderText="Pick a date"
                    />
                  </div>
                  <div className="flex flex-col mt-3 outline-none text-gray-600">
                    <Time className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="search">
                    <span className="text-sm font-bold text-gray-600">
                      Pick-up & return location
                    </span>
                    <input
                      id="search"
                      type="text"
                      placeholder="Mombasa, Moi Airport"
                      className="w-full outline-none border-b md:border-0 lg:border-b mb-2 mt-2"
                    />
                  </label>
                </div>
                <div className="md:w-7/12 lg:w-full mt-2">
                  <button type="button" className="w-full btn text-white">
                    Go to checkout
                  </button>
                  <p className="text-sm text-center mt-2">
                    You won't be charged until pick-up date
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-7/12">
            <div className="mt-8 lg:hidden">
              <h3 className="uppercase font-bold">Description</h3>
              <p className="mt-2">
                Experience the latest that Chevrolet has to offer. This 2019
                Corvette will make your experience unforgettable. Not only will
                you turn heads, but the adrenaline that results from the power
                of this car will excite even the most seasoned drivers. Want to
                drive along the coast and feel the refreshing breeze? No
                problem, you can remove the top to turn the car into a
                convertible!
              </p>
            </div>
            <div className="mt-6">
              <h3 className="uppercase font-bold">Business Class</h3>
              <p className="mt-1">This host caters to business travelers.</p>
            </div>
            <div className="mt-6">
              <h3 className="uppercase font-bold">Features</h3>
              <div className="flex">
                <ul>
                  <li>Must be 25+ to book</li>
                  <li>Automatic transmission</li>
                </ul>
                <ul className="ml-16">
                  <li>Audio Input</li>
                  <li>Convertible</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="uppercase font-bold">Extras (2)</h3>
              <div className="mt-3">
                <h3 className="font-bold">Post Trip Cleaning</h3>
                <p>
                  Return the car hassle free, without worry about cleaning up
                  after your trip. Purchasing this ensures you get the car
                  washed inside and out.
                </p>
                <p className="mt-1">500 KES / Trip</p>
              </div>
              <div className="mt-3">
                <h3 className="font-bold">Phone mount</h3>
                <p>
                  I will give you a magnetic piece that you attach to your
                  phone.
                </p>
                <p className="mt-1">100 KES / Trip</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="uppercase font-bold">Reviews</h3>
              <div className="mt-1">
                <p>Awesome Car. Had Lots of fun.</p>
                <h3 className="font-bold">Alvon S.</h3>
              </div>
              <div className="mt-3">
                <p>Was great working with John. Great and Clean Car.</p>
                <h3 className="font-bold">Keit M.</h3>
              </div>
              <div className="mt-5 text-center">
                <button type="button" className="btn text-white uppercase">
                  See more feedback
                </button>
              </div>
            </div>
          </div>
        </div>
        <FeaturedCars />
        <Footer />
      </>
    );
  }
}

export default Car;
