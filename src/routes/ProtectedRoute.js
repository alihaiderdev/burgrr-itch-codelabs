import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    loginUserInfo: { result },
  } = useSelector((state) => state.userLogin);

  // if (token) {
  //   return <Component {...props} />;
  // } else {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/admin/home',
  //         // state: { from: props.location }
  //       }}
  //     />
  //   );
  // }

  return (
    <Route
      {...rest}
      render={(props) =>
        result !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/admin/get-started' }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
