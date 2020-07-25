import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import pages
import Demo from './pages/demo/demo.jsx';
import NotFound from './pages/404-not-found/4040-not-found.jsx';
import Upload from './pages/upload/Upload.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}