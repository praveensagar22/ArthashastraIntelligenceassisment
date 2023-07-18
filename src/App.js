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
              <Link to="/">Table</Link>
            </li>
            <li>
              <Link to="/contact">Line Chart</Link>
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
