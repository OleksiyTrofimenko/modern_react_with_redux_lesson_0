// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './comments';
import SeasonApp from './seasons';
import PicsApp from './pics';
import VideosApp from './videos';

const Apps = [
  <CommentApp />,
  <SeasonApp />,
  <PicsApp />,
  <VideosApp />,
];

// Take the react component and show it on the screen
ReactDOM.render(
  Apps[3],
  document.querySelector('#root')
);
