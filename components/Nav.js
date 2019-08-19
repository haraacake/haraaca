/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';

class Nav extends Component {
  state = {};

  render() {
    const { auth } = this.props;

    return (
      <nav className="shadow-md fixed bg-white w-screen z-50">
        <div className="w-11/12 xl:w-10/12 mx-auto text-squid-100 font-bold tracking-wide flex justify-between h-20">
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
            {auth ? (
              <Link href="/list-your-car/list">
                <a>List Your Car</a>
              </Link>
            ) : (
              <Link href="/how-it-works">
                <a>How It Works</a>
              </Link>
            )}
            <Link href="/book-a-car">
              <a>Book A Car</a>
            </Link>
          </div>
          <div className="hidden lg:flex">
            <Link href="/">
              <img
                src="/static/logo.png"
                alt="haraaca logo"
                className="cursor-pointer h-20 w-20"
              />
            </Link>
          </div>
          <div className="hidden w-1/3 md:flex md:w-2/5 lg:w-1/3 items-center justify-between uppercase text-sm">
            {auth ? (
              <>
                <Link href="/trips">
                  <a>Trips</a>
                </Link>
                <Link href="/messages">
                  <a>Messages</a>
                </Link>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </>
            ) : (
              <>
                <Link href="/list-your-car">
                  <a>List Your Car</a>
                </Link>
                <Link href="/login">
                  <a>Login</a>
                </Link>
                <Link href="/signup">
                  <a>Signup</a>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex mb-3 md:hidden">
          <ul className="flex text-xs justify-between w-11/12 mx-auto font-bold text-squid-100 tracking-wide uppercase">
            <li>
              <Link href="/book-a-car">
                <a>Book A Car</a>
              </Link>
            </li>
            <li>
              <Link href="/list-your-car/list">
                <a>List Your Car</a>
              </Link>
            </li>
            {auth ? (
              <>
                <li>
                  <Link href="/trips">
                    <a>Trips</a>
                  </Link>
                </li>
                <li>
                  <Link href="/messages">
                    <a>Messages</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="">
                    <a>Profile</a>
                  </Link>
                </li> */}
              </>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
