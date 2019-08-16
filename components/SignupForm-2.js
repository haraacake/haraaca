import React, { Component } from 'react';
import Link from 'next/link';

import { Info } from './Alerts';

class SignupForm extends Component {
  state = {};

  render() {
    return (
      <div className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto p-10">
        <Info message="You can Skip Upload Document. You can still upload in your profile page." />
        <div className="flex flex-col lg:flex-row mt-4">
          <label htmlFor="selectdoc" className="block lg:mr-6">
            <span className="text-gray-800">Document type</span>
            <select className="form-select text-gray-800 block w-full h-12 mt-1">
              <option>National ID</option>
              <option>Driving Lincense</option>
              <option>Passport</option>
            </select>
          </label>
          <label htmlFor="last_name" className="block mt-5 lg:mt-0 lg:ml-6">
            <span className="text-gray-800">Upload File</span>
            <input
              id="last_name"
              type="file"
              className="form-input mt-1 block w-full"
              placeholder="Doe"
            />
          </label>
        </div>
        <p className="text-gray-700 font-bold tracking-wide text-xs mt-2">
          Select and upload a scan of the selected document for review
        </p>
        <label htmlFor="password" className="block mt-6 xl:mr-6">
          <span className="text-gray-800">Password</span>
          <input
            id="password"
            type="password"
            className="form-input mt-1 block w-full"
            placeholder="Make it strong"
          />
        </label>
        <label htmlFor="password" className="block mt-6 xl:mr-6">
          <span className="text-gray-800">Confirm Password</span>
          <input
            id="password"
            type="password"
            className="form-input mt-1 block w-full"
            placeholder="Make it strong"
          />
        </label>
        <Link href="/signup-success">
          <button type="button" className="block text-white btn-long mt-8">
            Finish
          </button>
        </Link>
      </div>
    );
  }
}

export default SignupForm;
