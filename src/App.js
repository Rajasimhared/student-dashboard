import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './layouts/LoginPage';
import Dashboard from './layouts/Dashboard';
import Details from './layouts/Details';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/:number" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
