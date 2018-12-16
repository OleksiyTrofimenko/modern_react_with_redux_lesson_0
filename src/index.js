// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './comments/index';
import SeasonApp from './seasons/index';

const Apps = [
  <CommentApp />,
  <SeasonApp />,
];

// Take the react component and show it on the screen
ReactDOM.render(
  Apps[1],
  document.querySelector('#root')
);
