import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import ReviewService from './components/ReviewService.jsx';
// import Example from './hookExample.jsx';

ReactDOM.render(<ReviewService start={2} />, document.getElementById('review'));
