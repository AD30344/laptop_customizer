import React, { Component } from 'react';
import updateFeature from './Update'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import App from './App.js';
import './App.css';
import './index.html';
import './index.css';
// This object will allow us to
// easily convert numbers into US dollar values
const total = Object.keys(this.state.selected).reduce(
  (acc, curr) => acc + this.state.selected[curr].cost,
  0
);

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default USCurrencyFormat;
export default total;