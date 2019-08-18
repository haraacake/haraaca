/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="w-11/12 md:w-5/6 mx-auto text-squid-100 mt-12 md:mt-20 lg:mt-24 md:flex md:justify-between">
        <div>
          <h3 className="font-bold text-xl">Get Started</h3>
          <ul className="md:mt-2">
            <li>Get Android App</li>
            <li>Get iPhone App</li>
            <li>
              <Link href="/how-it-works">
                <a>How It Works</a>
              </Link>
            </li>
            <li>
              <Link href="/list-your-car">
                <a>List Your Car</a>
              </Link>
            </li>
            <li>Business Cars</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0 flex">
          <div>
            <h3 className="font-bold text-xl">Vehicle Types</h3>
            <ul className="md:mt-2">
              <li>
                <Link href="/categories/trucks">
                  <a>Trucks</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/vans">
                  <a>Vans</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/luxury">
                  <a>Luxury & Exotic</a>
                </Link>
              </li>
              <li>
                <Link href="/categories/minivans">
                  <a>Minivans</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-16 md:ml-8 lg:ml-24 xl:ml-48">
            <h3 className="font-bold text-xl">Top Cities</h3>
            <ul className="md:mt-2">
              <li>
                <Link href="/towns/nairobi">
                  <a>Nairobi</a>
                </Link>
              </li>
              <li>
                <Link href="/towns/mombasa">
                  <a>Mombasa</a>
                </Link>
              </li>
              <li>
                <Link href="/towns/kisumu">
                  <a>Kisumu</a>
                </Link>
              </li>
              <li>
                <Link href="/towns/eldorate">
                  <a>Eldorate</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="font-bold text-xl">Talk to us</h3>
          <ul className="md:mt-2">
            <li className="flex my-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <img src="/static/facebook.svg" alt="facebook icon" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <img src="/static/instagram.svg" alt="instagram icon" />
              </a>
              <a
                href="mailto:info@haraaca.com"
                ctarget="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <img src="/static/mail.svg" alt="mail icon" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/static/twitter.svg" alt="twitter icon" />
              </a>
            </li>
            <li>Contact Customer Care</li>
          </ul>
        </div>
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto text-squid-100 border-t-2 border-squid-100 mt-4 md:mt-6">
        <p className="text-sm my-4">© 2019 Haraaca, LTD.</p>
      </div>
    </>
  );
};

export default Footer;
