import React, { Component } from 'react';

class LoginForm extends Component {
  state = {};

  render() {
    return (
      <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-6/12 mx-auto p-10">
        <label htmlFor="email" className="block">
          <span className="text-gray-800">Email</span>
          <input
            id="email"
            type="email"
            className="form-input mt-1 block w-full"
            placeholder="john@example.com"
          />
        </label>
        <label htmlFor="password" className="block mt-6">
          <span className="text-gray-800">Password</span>
          <input
            id="password"
            type="password"
            className="form-input mt-1 block w-full"
            placeholder="keep it strong"
          />
        </label>
        <button type="button" className="block text-white btn-long mt-5">
          Login
        </button>
        <button
          type="button"
          className="block text-white btn-long mt-4 bg-blue-700 shadow-md"
        >
          Login with facebook
        </button>
        <button
          type="button"
          className="block text-white btn-long mt-2 px-8 bg-white text-squid-100 shadow-lg"
        >
          Login with google
        </button>
      </div>
    );
  }
}

export default LoginForm;
