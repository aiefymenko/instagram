import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

export default function IsUserLoggedIn ({user, loggedInPath, children, ...rest}) {
 return (
  <Route
  {...rest}
  redner={({location}) => {
    if (!user) {
      return children;
    }
    if (user) {
      return (
      <Navigate
      to={{
        pathname: loggedInPath,
        state: {from: location}
      }}
      />
      )
    }
    return null;
  }}
  />
 )
}

IsUserLoggedIn.propTypes = {
user: PropTypes.object,
children: PropTypes.object.isRequired,
loggedInPath: PropTypes.string.isRequired


}