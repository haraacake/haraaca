/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';

import Time from './Time';

const SearchContainer = styled.div``;

const Search = () => {
  return (
    <SearchContainer>
      <form className="relative w-full bg-white shadow-lg rounded p-6 md:w-2/4 lg:w-2/5">
        <h3 className="hidden md:block leading-tight text-squid-100 text-left text-3xl font-bold mb-10">
          Unforgettable experiences, Affordable Cars.
        </h3>
        <div>
          <label htmlFor="search">
            <span className="text-sm font-bold text-gray-600">Where</span>
            <input
              id="search"
              type="text"
              placeholder="Enter your pick-up location"
              className="w-full outline-none border-b mb-2 mt-2"
            />
          </label>
        </div>
        <div className="flex">
          <div className="flex flex-col mt-2">
            <label htmlFor="from" className="text-sm text-gray-600 font-bold">
              From
            </label>
            <DatePicker
              className="w-full outline-none border-b mb-2"
              id="from"
              placeholderText="Pick a date"
            />
          </div>
          <div className="flex flex-col mt-3 xl:ml-12 outline-none text-gray-600">
            <Time className="" />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col mt-2">
            <label htmlFor="from" className="text-sm text-gray-600 font-bold">
              Until
            </label>
            <DatePicker
              className="w-full outline-none border-b mb-2"
              id="from"
              placeholderText="Pick a date"
            />
          </div>
          <div className="flex flex-col mt-3 xl:ml-12 outline-none text-gray-600">
            <Time className="" />
          </div>
        </div>
        <div className="mt-2">
          <button
            type="button"
            className="w-full btn text-white md:w-1/2 lg:ml-40 xl:ml-48"
          >
            Search
          </button>
        </div>
      </form>
    </SearchContainer>
  );
};

export default Search;
