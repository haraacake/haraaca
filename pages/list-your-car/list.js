/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
// import Link from 'next/link';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Info } from '../../components/Alerts';

class ListYourCarAuth extends Component {
  state = {
    Auth: {
      token: true,
      first_name: 'John',
      last_name: 'Doe',
    },
  };

  render() {
    return (
      <>
        <div>
          <Nav auth />
          <div className="h-48 bg-gray-900">{/* profile pic */}</div>
          <div className="w-11/12 md:w-3/6 mx-auto">
            <h1 className="text-4xl mt-8 font-bold tracking-wide">
              List Your Car
            </h1>
          </div>
          <div className="mt-8 w-11/12 md:w-3/6 mx-auto">
            <Info message="Your account email, phone and driving lincense has to be verified by haraaca." />
            <label htmlFor="location" className="block mt-5">
              <span className="text-gray-800">Where is your car located?</span>
              <input
                id="location"
                type="text"
                className="form-input mt-1 block w-full"
                placeholder="Enter Address / City"
              />
            </label>
            <div className="flex mt-4">
              <label htmlFor="location" className="block">
                <span className="text-gray-800">Which car do you have?</span>
                <input
                  id="location"
                  type="text"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter your VIN"
                />
              </label>
              <label htmlFor="year" className="block ml-8">
                <span className="text-gray-700">Year</span>
                <select className="form-select mt-1 block w-full">
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                </select>
              </label>
            </div>
            <button type="button" className="btn-sm mt-4">
              Next
            </button>
          </div>
          <div className="mt-48">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default ListYourCarAuth;
