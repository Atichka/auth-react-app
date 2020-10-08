import React from 'react';
import './App.css';
import PageLogin from './components/PageLogin/PageLogin';
import PageUsers from './components/PageUsers/PageUsers';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <PageLogin />
        </Route>
        <Route path="/users">
          <PageUsers />
        </Route>
      </div>
    </Router>
  );
}

export default App;
