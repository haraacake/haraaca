/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Messages extends Component {
  state = {
    Auth: {
      token: true,
      first_name: 'John',
      last_name: 'Doe',
    },
  };

  render() {
    return (
      <>
        <div>
          <Nav auth />
          <div className="h-48 bg-gray-900">{/* profile pic */}</div>
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h1 className="text-4xl mt-10 font-bold tracking-wide">Messages</h1>
          </div>
          <div className="text-center mt-12">
            <h2 className="text-gray-700 font-bold tracking-wide text-4xl">
              No Messages yet
            </h2>
          </div>
          <div className="mt-48">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Messages;
