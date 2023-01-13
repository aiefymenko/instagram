import PropTypes from 'prop-types';
import { Outlet, Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute ({user}) {
 return (
    user ? <Outlet /> : <Navigate
    to={{
      pathname: ROUTES.LOGIN
    }}
    />
      )
    }


ProtectedRoute.propTypes = {
user: PropTypes.object
}