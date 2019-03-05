import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authenticate from './Authenticate';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return Authenticate.isUserAuthenticated() ?
        <Component {...props} {...rest} />
        :
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />;
    }}

  />
);

export default PrivateRoute;
