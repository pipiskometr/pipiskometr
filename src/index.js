import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

import data from './data';

let value = 0;

const onPercentileChange = (v) => {
    value = v;
    render();
};

const render = () =>
ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);

render();
