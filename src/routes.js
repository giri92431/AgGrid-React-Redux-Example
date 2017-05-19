import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Home/HomePage';

import AboutPage from './components/About/AboutPage';

import AgGrid from "./components/AgGrid/AgGrid";

import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="AgGrid" component={AgGrid}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
