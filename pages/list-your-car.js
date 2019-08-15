import React from 'react';
import styled from 'styled-components';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Div = styled.div`
  background: url('/static/effortless-earning.jpg');
  background-repeat: no-repeat;
  background-position: center;
`;

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
      <div className="w-4/5 md:w-5/6 mx-auto text-squid-100 mt-12 lg:mt-16">
        <h2 className="text-3xl font-bold uppercase leading-snug">
          Why list your car with us?
        </h2>
        <div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold">You're safe</h3>
            <p className="mt-2">
              We screen all travelers before allowing them to book cars in our
              marketplace.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold">You're not alone</h3>
            <p className="mt-2">
              From our 24/7 emergency line to tips and tricks to earn more with
              your car, we’ll be here for you every step of the way.
            </p>
          </div>
        </div>
      </div>
      <Div className="mt-12 h-screen text-white">
        <div className="w-4/5 mx-auto">
          <h3 className="text-4xl font-bold pt-16">Effortless Earning</h3>
          <p className="text-lg mt-8 leading-snug">
            Discover Haraaca Car Lock, an exciting new feature that will allow
            car owners to remotely unlock their vehicles for their guests, track
            mileage, and more.
          </p>
          <p className="text-lg mt-8 leading-snug">
            Jump on the waitlist now for exclusive early access to Haraaca Car
            Lock remote unlocking hardware, available in select markets.
          </p>
          <button className="btn uppercase mt-8" type="button">
            Notify me
          </button>
        </div>
      </Div>
      <div className="w-4/5 md:w-5/6 mx-auto text-squid-100 mt-12 lg:mt-16">
        <h3 className="font-bold uppercase leading-tight text-3xl">
          Haraaca For Business
        </h3>
        <h4 className="text-2xl">Cars for busy professionals</h4>
        <p className="mt-3 text-left">
          Business Class is a carefully curated collection of cars, from
          experienced, top-performing, local hosts. Their cars are clean, well
          maintained, and offer delivery to wherever you are, so you can just
          jump in and go.
        </p>
        <button type="button" className="mt-6 btn text-white">
          Explore Business Class
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ListYourCar;
