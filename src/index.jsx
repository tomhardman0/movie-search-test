import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

import Home from './components/home/home';
import List from './components/list/list';
import Movie from './components/movie/movie';

import { initStore } from './store';
const store = initStore(historyMiddleware);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={List}/>
        <Route path="/movie" component={Movie}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
