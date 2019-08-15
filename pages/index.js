import React from 'react';
import Link from 'next/link';

import FeaturedCars from '../components/FeaturedCars';
import TopDestinations from '../components/TopDestinations';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
      <div className="">
        <Nav />
        <img
          className="h-screen w-screen object-cover"
          src="/static/head-image.jpg"
          alt="home"
        />
      </div>
      <div className="w-4/5 mx-auto text-squid-100 mt-12">
        <h1 className="text-4xl text-left md:text-center leading-none font-semibold">
          Rent better cars anytime, and <br /> anywhere{' '}
        </h1>
        <div className="mt-12">
          <div className="md:flex md:justify-center">
            <div className="md:mr-4">
              <h3 className="text-2xl font-semibold">
                <img
                  className="inline pr-2"
                  src="/static/security.png"
                  alt="security"
                />
                Secure
              </h3>
              <p className="mt-2 text-lg leading-snug">
                Verified drivers, an emergency alert button and live ride
                tracking are some of the features that we have in place to
                ensure you a safe travel experience.
              </p>
            </div>
            <div className="mt-10 md:mt-0 md:ml-4">
              <h3 className="text-2xl font-semibold">
                <img
                  className="inline pr-4"
                  src="/static/flexible.png"
                  alt="Flexible"
                />
                Flexible
              </h3>
              <p className="mt-3 text-lg leading-snug">
                Easily plan a day out without having to worry about convenience
                as with Haraaca rentals, you can book a cab immediately or up to
                48 hours in advance.
              </p>
            </div>
          </div>
          <div className="mt-10 md:w-7/12">
            <h3 className="text-2xl font-semibold">
              <img
                className="inline pr-2"
                src="/static/money.png"
                alt="money"
              />
              Affordable
            </h3>
            <p className="mt-3 text-lg leading-snug">
              Packages start at 1 hour and can extend up to 12 hours. Also, with
              some nominal additional charges, cabs can be retained beyond
              package limits.
            </p>
          </div>
        </div>
      </div>
      <FeaturedCars />
      <TopDestinations />
      <div className="w-4/5 md:w-5/6 mx-auto text-squid-100 mt-16">
        <h2 className="text-2xl font-bold md:text-center">
          Let your car work for you
        </h2>
        <div className="mt-6 md:mt-8 md:flex md:justify-between">
          <div className="mt-3 md:w-1/2 mr-3">
            <h3 className="text-xl font-bold">You&apos;re safe</h3>
            <p className="text-lg mt-2">
              We screen all travelers before allowing them to book cars in our
              marketplace.
            </p>
          </div>
          <div className="mt-6 md:mt-3 md:w-1/2 md:ml-3">
            <h3 className="text-xl font-bold">You&apos;re not alone</h3>
            <p className="text-lg mt-2">
              From our 24/7 emergency line to tips and tricks to earn more with
              your car, we’ll be here for you every step of the way.
            </p>
          </div>
        </div>
        <div className="md:flex md:justify-center mt-3 md:mt-6">
          <Link href="/list-your-car">
            <button
              className="mt-4 bg-teal-600 text-white font-bold py-2 px-4 rounded-br-lg"
              type="button"
            >
              List Your Car
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
