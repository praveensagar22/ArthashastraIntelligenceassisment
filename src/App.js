import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MedalsTable from './components/Table';
import MedalsLineChart from './components/MedalsLineChart';
import PersonalDetails from './components/PersonalDetails';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="navbar">
      <PersonalDetails />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MedalsTable} />
          <Route exact path="/contact" component={MedalsLineChart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
