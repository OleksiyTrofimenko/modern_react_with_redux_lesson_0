// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import reducers from './redux/reducers';
import blogReducers from './blog/reducers';

// Applications
import ReduxApp from './redux/components/app'; // redux
import CommentApp from './comments';
import SeasonApp from './seasons';
import PicsApp from './pics';
import VideosApp from './videos';
import BlogApp from './blog/components'; // redux

const isReduxApp = true;
const hasMiddleware = true;

const Apps = [
  <CommentApp />,
  <SeasonApp />,
  <PicsApp />,
  <VideosApp />,
];

const middleWareStore = createStore(
  blogReducers,
  applyMiddleware(thunk),
);

// Take the react component and show it on the screen
// Provide Middleware application
if (isReduxApp && hasMiddleware) {
  console.log('yes');

  ReactDOM.render(
    <Provider store={middleWareStore}>
      <BlogApp />
    </Provider>,
    document.querySelector('#root')
  );
}

// Provide simple react or react & redux application
if (!hasMiddleware) {
  if (isReduxApp) {
    ReactDOM.render(
      <Provider store={createStore(reducers)}>
        <ReduxApp />
      </Provider>,
      document.querySelector('#root')
    );
  } else {
    ReactDOM.render(
      Apps[3],
      document.querySelector('#root')
    );
  }
}


