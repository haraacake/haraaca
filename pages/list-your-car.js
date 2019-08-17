import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Header = styled.div`
  background: url('/static/effortless-earning.jpg');
  background-repeat: no-repeat;
  background-position: left;
  object-fit: fill;
`;

const Div = styled.div`
  background: url('/static/effortless-earning.jpg');
  background-repeat: no-repeat;
  background-position: center;
`;

const ListYourCar = () => {
  return (
    <>
      <Header className="h-screen w-full">
        <Nav />
        <div className="w-4/5 md:w-3/5 xl:w-2/4 mx-auto pt-40 md:pt-56 md:text-center text-white">
          <h1 className="font-bold text-3xl md:text-4xl leading-tight">
            Let Your Car Work For You
          </h1>
          <p className="mt-6 font-bold text-lg">
            Renting out your car has never been this easy. Listing your car is
            easy and it takes just about 10 Minutes.
          </p>
          <Link href="/signup">
            <button className="btn btn-wheel mt-8" type="button">
              Get Started
            </button>
          </Link>
        </div>
      </Header>
      <div className="w-4/5 md:w-5/6 mx-auto text-squid-100 mt-12 lg:mt-16">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase leading-snug lg:text-center">
          Why list your car with us?
        </h2>
        <div className="lg:flex">
          <div className="mt-6 lg:mt-10 lg:mr-8">
            <h3 className="text-2xl font-bold">You&apos;re safe</h3>
            <p className="mt-2 lg:mt-4 text-lg">
              We screen all travelers before allowing them to book cars in our
              marketplace.
            </p>
          </div>
          <div className="mt-10 lg:mt-10 lg:ml-8">
            <h3 className="text-2xl font-bold">You&apos;re not alone</h3>
            <p className="mt-2 lg:mt-4 text-lg">
              From our 24/7 emergency line to tips and tricks to earn more with
              your car, we’ll be here for you every step of the way.
            </p>
          </div>
        </div>
      </div>
      <Div className="mt-12 h-screen text-white">
        <div className="w-4/5 lg:w-1/2 mx-auto lg:text-center">
          <h3 className="text-4xl lg:text-5xl font-bold pt-16 lg:pt-40">
            Effortless Earning
          </h3>
          <p className="text-lg mt-8 leading-snug">
            Discover Haraaca Car Lock, an exciting new feature that will allow
            car owners to remotely unlock their vehicles for their guests, track
            mileage, and more.
          </p>
          <p className="text-lg mt-8 lg:mt-6 leading-snug">
            Jump on the waitlist now for exclusive early access to Haraaca Car
            Lock remote unlocking hardware, available in select markets.
          </p>
          <button className="btn uppercase mt-8" type="button">
            Notify me
          </button>
        </div>
      </Div>
      <div className="w-4/5 md:w-5/6 mx-auto text-squid-100 mt-12 lg:mt-16 lg:text-center lg:w-3/5">
        <h3 className="font-bold uppercase leading-tight text-3xl lg:text-4xl">
          Haraaca For Business
        </h3>
        <h4 className="text-2xl">Cars for busy professionals</h4>
        <p className="mt-4 lg:mt-6 text-left lg:text-center text-lg">
          Business Class is a carefully curated collection of cars, from
          experienced, top-performing, local hosts. Their cars are clean, well
          maintained, and offer delivery to wherever you are, so you can just
          jump in and go.
        </p>
        <button type="button" className="mt-6 lg:mt-10 btn text-white">
          Explore Business Class
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ListYourCar;
