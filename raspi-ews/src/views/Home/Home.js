import React from 'react';
import { Redirect } from 'react-router-dom';

const HomeView = (props) => {
  return (<Redirect to='/systems' />);
};

export default HomeView;