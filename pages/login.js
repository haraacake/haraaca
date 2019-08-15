import React from 'react';

import Nav from '../components/Nav';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <div className="">
        <Nav />
      </div>
      <div className="pt-32">
        <div className="w-2/4 mx-auto shadow-lg">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
