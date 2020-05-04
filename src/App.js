import React from "react";
import {map} from 'lodash-es';
import { v1 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {routes} from './routes';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">ProductList</Link>
          </li>
          <li>
            <Link to="/CategoryNav">CategoryNav</Link>
          </li>
        </ul>
      </div>
      {map(routes, (page, url) =>
        <Route exact
               path={url}
               component={page.component}
               key={v1()}
        />
      )}
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
