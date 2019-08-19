/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Link from 'next/link';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Trips extends Component {
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
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h1 className="text-4xl mt-10 font-bold tracking-wide">Trips</h1>
          </div>
          <div className="mt-12 w-11/12 md:w-5/6 mx-auto">
            <h2 className="text-gray-700 font-bold tracking-wide text-4xl">
              You have not booked yet
            </h2>
            <Link href="/book-a-car">
              <a className="text-2xl font-bold text-teal-500">Book a car now</a>
            </Link>
          </div>
          <div className="mt-48">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Trips;
