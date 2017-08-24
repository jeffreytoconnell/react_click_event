import React from 'react';
import ReactDOM from 'react-dom';
import Surprise from './components/surprise';
import './index.css';

ReactDOM.render(
  <Surprise />,  // FROM ABOVE
  document.getElementById('click-surprise') // RENDER THIS TO DIV
);
