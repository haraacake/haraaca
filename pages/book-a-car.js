import React from 'react';

import SearchNav from '../components/SearchNav';
import TopDestinations from '../components/TopDestinations';
import TopListedCars from '../components/TopListedCars';
import Footer from '../components/Footer';

const BookACar = () => {
  return (
    <>
      <div className="">
        <SearchNav />
      </div>
      <div className="pt-48">
        <TopDestinations />
      </div>
      <TopListedCars />
      <Footer />
    </>
  );
};

export default BookACar;
