import React from 'react';
import ReactDOM from 'react-dom';
import NoteContainer from './NoteContainer';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  < NoteContainer />,
  document.getElementById('app')
);

module.hot.accept();