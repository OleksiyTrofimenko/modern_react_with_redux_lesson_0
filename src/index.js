// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './comments';
import SeasonApp from './seasons';
import PicsApp from './pics';

const Apps = [
  <CommentApp />,
  <SeasonApp />,
  <PicsApp />,
];

// Take the react component and show it on the screen
ReactDOM.render(
  Apps[2],
  document.querySelector('#root')
);
