/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import Nav from '../components/Nav';

class ListYourCarAuth extends Component {
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
        </div>
      </>
    );
  }
}

export default ListYourCarAuth;
