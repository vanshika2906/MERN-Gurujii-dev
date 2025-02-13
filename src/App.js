import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/Preloader';
import './App.css';

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/home')), 4000);
  });
});

const Footer = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Footer')), 5000);
  });
});

const E404 = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/E404')), 3000);
  });
});

function App() {
  return (
    <>
      <Router>
        <React.Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='*' component={E404} />
          </Switch>
        </React.Suspense>
      </Router>
      <React.Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '50px',
              fontWeight: 'medium',
            }}
          >
            Loading...
          </div>
        }
      >
        <Footer />
      </React.Suspense>
    </>
  );
}

export default App;
