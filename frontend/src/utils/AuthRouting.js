import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authenticate from './Authenticate';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Authenticate.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
