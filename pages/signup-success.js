import React from 'react';
import Link from 'next/link';

import Nav from '../components/Nav';
import { Banner } from '../components/Alerts';

const Signup = () => {
  return (
    <>
      <div className="">
        <Nav />
      </div>
      <div className="pt-32">
        <div className="w-full md:w-11/12 lg:w-9/12 xl:w-8/12 mx-auto shadow-lg p-20">
          <Banner
            title="Success"
            message="We have sent you an Email. Please Confirm Your Email to start
              using haraaca without limits."
          />
          <div className="mt-6 text-teal-600 uppercase font-bold tracking-wide leading-none">
            <Link href="/login">
              <a>
                Login
                <img
                  className="inline ml-2 my-0"
                  src="/static/chevron-right.svg"
                  alt="chevron"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
