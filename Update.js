import React, { Component } from 'react';
import features from './index.js';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import App from './App';
import './App.css';

updateFeature = (feature, newValue) => {
  const selected = Object.assign({}, this.state.selected);
  selected[feature] = newValue;
  this.setState({
    selected
  });
};



  
export default updateFeature; 