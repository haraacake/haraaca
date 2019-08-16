import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link rel="stylesheet" href="/static/nprogress.css" />
      <link rel="stylesheet" href="/static/react-datepicker.css" />
      <title>Rent better cars anytime and anywhere | Haraaca</title>
    </Head>
  );
};

export default Meta;
