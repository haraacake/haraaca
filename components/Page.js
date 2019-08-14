import React, { Component } from 'react';
import Meta from './Meta';

class Page extends Component {
  state = {};

  render() {
    return (
      <div>
        <Meta />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
