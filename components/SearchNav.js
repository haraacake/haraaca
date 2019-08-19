/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="shadow-md fixed bg-white w-screen">
      <div className="w-11/12 xl:w-10/12 mx-auto text-squid-100 font-bold tracking-wide flex justify-between">
        <div className="flex lg:hidden">
          <Link href="/">
            <img
              src="/static/logo.png"
              alt="haraaca logo"
              className="cursor-pointer h-16"
            />
          </Link>
        </div>
        <div className="hidden w-1/3 md:flex items-center justify-between uppercase text-sm">
          <Link href="/how-it-works">
            <a>How It Works</a>
          </Link>
          <Link href="/book-a-car">
            <a>Book A Car</a>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Link href="/">
            <img
              src="/static/logo.png"
              alt="haraaca logo"
              className="cursor-pointer h-16"
            />
          </Link>
        </div>
        <div className="hidden w-1/3 md:flex md:w-2/5 lg:w-1/3 items-center justify-between uppercase text-sm">
          <Link href="/list-your-car">
            <a>List Your Car</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </div>
      </div>
      <div className="flex mt-3 mb-4 md:hidden">
        <ul className="flex text-xs justify-between w-11/12 mx-auto font-bold text-squid-100 tracking-wide uppercase">
          <li>
            <Link href="/book-a-car">
              <a>Book A Car</a>
            </Link>
          </li>
          <li>
            <Link href="/list-your-car">
              <a>List Your Car</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-11/12 mx-auto mb-4">
        <div className="w-3/3 md:w-1/3">
          <input
            className="form-input mt-1 block w-full"
            placeholder="Car Type, Pick-up location"
          />
        </div>
        <div className="mt-5 flex text-xs">
          <button
            className="btn-filter text-white uppercase md:px-4 md:py-2"
            type="button"
          >
            Dates
          </button>
          <button
            className="ml-2 btn-filter text-white uppercase md:px-4 md:py-2"
            type="button"
          >
            Car Types
          </button>
          <button
            className="ml-2 btn-filter text-white uppercase md:px-4 md:py-2"
            type="button"
          >
            Prices
          </button>
          <button
            className="ml-2 btn-filter text-white uppercase md:px-4 md:py-2"
            type="button"
          >
            More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
