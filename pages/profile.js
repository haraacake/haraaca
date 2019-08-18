/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Profile extends Component {
  state = {
    Auth: {
      token: true,
      first_name: 'John',
      last_name: 'Doe',
    },
  };

  render() {
    const { Auth } = this.state;
    return (
      <>
        <div>
          <Nav auth />
          <div className="h-48 bg-gray-900">{/* profile pic */}</div>
          <div className="text-center w-11/12 md:w-5/6 mx-auto mt-8">
            <button type="button" className="btn text-white">
              Upload profile picture
            </button>
            <p className="mt-4 text-xs text-gray-600">
              Add a face to the name. It will help other users to recognize you
              at the beginning of a trip.
            </p>
            <div className="mt-8 text-left">
              <h1 className="font-bold text-3xl uppercase text-squid-100">
                {Auth.first_name}
              </h1>
            </div>
          </div>
          <div className="w-11/12 md:w-5/6 mx-auto mt-6">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <label htmlFor="lives" className="block lg:mr-6">
                  <span className="text-gray-800 uppercase tracking-wide font-bold">
                    Lives
                  </span>
                  <input
                    id="lives"
                    type="text"
                    className="form-input mt-1 block w-full"
                    placeholder="Mombasa, Kenya"
                  />
                </label>
                <p className="mt-2 text-gray-700 text-sm">Joined Aug 2019</p>
                <label htmlFor="works" className="block lg:mr-6 mt-5">
                  <span className="text-gray-800 uppercase tracking-wide font-bold">
                    Works
                  </span>
                  <input
                    id="works"
                    type="text"
                    className="form-input mt-1 block w-full"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2">
                <label htmlFor="textarea" className="block">
                  <span className="text-gray-800 uppercase font-bold tracking-wide">
                    about {Auth.first_name}
                  </span>
                  <textarea
                    className="form-textarea mt-1 block w-full"
                    rows="3"
                    placeholder=""
                  />
                </label>
                <p className="mt-4 text-gray-700 text-sm">
                  Tell other users about yourself and why you’re a responsible,
                  trustworthy person. Share your favorite travel experiences,
                  your hobbies, your dream car, or your driving experience. Feel
                  free to include links to your LinkedIn, Twitter, or Facebook
                  profiles so they get to know you even better.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-gray-800 font-bold uppercase">
                Verified Info
              </h3>
              <p className="text-gray-700 text-sm mt-2">
                Build trust with other users by verifying your contact
                information.
              </p>
              <div className="flex">
                <ul className="mt-5">
                  <li className="text-gray-800">Approved to drive</li>
                  <li className="text-gray-800">Email Address</li>
                  <li className="text-gray-800">Phone Number</li>
                  <li className="text-gray-800">Facebook</li>
                  <li className="text-gray-800">LinkedIn</li>
                </ul>
                <ul className="mt-5 ml-16">
                  <li className="text-teal-600">Pending Approval</li>
                  <li className="text-teal-600">Verified</li>
                  <li className="text-teal-600">Verify Phone Number</li>
                  <li className="text-teal-600">Connect</li>
                  <li className="text-teal-600">Connect</li>
                </ul>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Profile;
