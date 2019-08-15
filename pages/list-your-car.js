import React from 'react';

import Nav from '../components/Nav';

const ListYourCar = () => {
  return (
    <>
      <div className="">
        <Nav />
        <img
          className="h-screen w-screen object-cover object-left md:object-center"
          src="/static/3.jpg"
          alt="home"
        />
      </div>
    </>
  );
};

export default ListYourCar;
