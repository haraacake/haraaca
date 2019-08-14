import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Meta from './Meta';

injectGlobal`
  @font-face {
    font-family: 'circular';
    src: url('/static/CircularStd-Book.woff2') format('woff2');
  }
  * {
    font-family: 'circular';
  }
`;

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
