import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';
import UserContext from './context/user';

import ProtectedRoute from './helpers/protected-route';

//loading login page at the background in "lazy" mode
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/not-found'));
const Dashboard = lazy(() => import('./pages/dashboad'));
const Profile = lazy(() => import('./pages/profile'));


export default function App() {
  const {user} = useAuthListener();
  return (
    <UserContext.Provider value = {{user}} >
    <Router>
      <Suspense fallback= {<p>Loading...</p>} >
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route element={<Dashboard />} path={ROUTES.DASHBOARD} exact />
          </Route>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
};
