import React, { Component } from 'react';

class SignupForm extends Component {
  state = {};

  render() {
    return (
      <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto p-10">
        <div className="flex flex-col lg:flex-row">
          <label htmlFor="first_name" className="block lg:mr-6">
            <span className="text-gray-800">First Name</span>
            <input
              id="first_name"
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="John"
            />
          </label>
          <label htmlFor="last_name" className="block mt-5 lg:mt-0 lg:ml-6">
            <span className="text-gray-800">Last Name</span>
            <input
              id="last_name"
              type="text"
              className="form-input mt-1 block w-full"
              placeholder="Doe"
            />
          </label>
        </div>
        <p className="text-gray-700 font-bold tracking-wide text-xs mt-2">
          Enter your name as it appears on your drivers license
        </p>
        <label htmlFor="email" className="block mt-6 xl:mr-6">
          <span className="text-gray-800">Email</span>
          <input
            id="email"
            type="email"
            className="form-input mt-1 block w-full"
            placeholder="john@example.com"
          />
        </label>
        <button type="button" className="block text-white btn-long mt-8">
          Continue
        </button>
        <button
          type="button"
          className="block text-white btn-long mt-4 bg-blue-700 shadow-md"
        >
          Continue with facebook
        </button>
        <button
          type="button"
          className="block text-white btn-long mt-2 px-8 bg-white text-squid-100 shadow-md"
        >
          Continue with google
        </button>
      </div>
    );
  }
}

export default SignupForm;
