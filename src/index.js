// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import ReduxApp from './redux/components/app';

import CommentApp from './comments';
import SeasonApp from './seasons';
import PicsApp from './pics';
import VideosApp from './videos';

const isReduxApp = true;

const Apps = [
  <CommentApp />,
  <SeasonApp />,
  <PicsApp />,
  <VideosApp />,
];

// Take the react component and show it on the screen

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
