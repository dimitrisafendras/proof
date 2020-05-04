import React from "react";
import {map} from 'lodash-es';
import { v1 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {AppLayout, Header, Sidebar} from './components';
import {routes} from './routes';

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Header/>
        <Sidebar/>
        {map(routes, (page, url) =>
          <Route exact
                 path={url}
                 component={page.component}
                 key={v1()}
          />
        )}
      </AppLayout>
    </Router>
  );
}
