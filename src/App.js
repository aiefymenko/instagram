import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//loading login page at the background in "lazy" was
const Login = lazy(() => import('./pages/login'));


function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/login" component={Login} />
        </Routes>

      </Suspense>
    </Router>
  );
}

export default App;
