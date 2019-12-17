import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Dashboard from './dashboard/Dashboard';

ReactDOM.render(<Dashboard />, document.getElementById('root'));

// yarn add @testing-library/react
// @testing-library/react should then show up as a dev dependency
// testing-library includes jest, so DO NOT also install jest or it will break the project
