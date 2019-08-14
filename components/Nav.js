/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="container mx-auto w-5/6 text-squid-100 font-bold tracking-wide flex justify-between">
      <div className="hidden w-1/3 md:flex items-center justify-between uppercase text-sm bg-red-100">
        <Link href="/how-it-works">
          <a>How It Works</a>
        </Link>
        <Link href="/book-a-car">
          <a>Book A Car</a>
        </Link>
      </div>
      <div className="">
        <Link href="/">
          <img
            src="/static/logo.png"
            alt="haraaca logo"
            className="cursor-pointer h-16"
          />
        </Link>
      </div>
      <div className="hidden w-1/3 md:flex items-center justify-between bg-red-100 uppercase text-sm">
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
    </nav>
  );
};

export default Nav;
