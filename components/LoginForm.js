import React, { Component } from 'react';

class LoginForm extends Component {
  state = {};

  render() {
    return (
      <div className="w-9/12 mx-auto p-10">
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="form-input mt-1 block w-full"
            placeholder="john@example.com"
          />
        </label>
        <label className="block mt-6">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="form-input mt-1 block w-full"
            placeholder="keep it strong"
          />
        </label>
        <button type="button" className="block text-white btn-long mt-8">
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
          className="block text-white btn-long mt-2 px-8 bg-white text-squid-100 shadow-md"
        >
          Login with google
        </button>
      </div>
    );
  }
}

export default LoginForm;
