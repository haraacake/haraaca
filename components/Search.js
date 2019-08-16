/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import Time from './Time';

const SearchContainer = styled.div``;

const Search = () => {
  return (
    <SearchContainer>
      <form className="relative md:hidden w-full bg-white shadow-lg rounded p-6">
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
          <div className="flex flex-col mt-3 outline-none text-gray-600">
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
          <div className="flex flex-col mt-3 outline-none text-gray-600">
            <Time className="" />
          </div>
        </div>
        <div className="mt-2">
          <button type="button" className="w-full btn text-white">
            Search
          </button>
        </div>
      </form>
      <div className="w-full bg-white shadow-lg rounded-tr-full rounded-br-full">
        <form className="hidden md:flex p-2 justify-between">
          <div className="">
            <label htmlFor="search">
              <span className="text-sm font-bold text-gray-600">Where</span>
              <input
                id="search"
                type="text"
                placeholder="Enter your pick-up location"
                className="w-full outline-none"
              />
            </label>
          </div>
          <div className="flex border-l-2 pl-4">
            <div className="flex flex-col">
              <label htmlFor="from" className="text-sm text-gray-600 font-bold">
                From
              </label>
              <DatePicker
                className="w-full outline-none"
                id="from"
                placeholderText="Pick a date"
              />
            </div>
          </div>
          <div className="flex border-l-2 pl-4">
            <div className="flex flex-col">
              <label htmlFor="from" className="text-sm text-gray-600 font-bold">
                Until
              </label>
              <DatePicker
                className="w-full outline-none"
                id="from"
                placeholderText="Pick a date"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="bg-teal-500 w-12 h-12 rounded-full"
            >
              <img src="/static/search.png" alt="" />
            </button>
          </div>
        </form>
      </div>
    </SearchContainer>
  );
};

export default Search;
