import React, {useState, useEffect} from 'react';
import {Authincated, UnAuthicated} from './MainNavigation';
import {useSelector} from 'react-redux';

const RootNavigation = () => {
  const user = useSelector(state => state.user);
  if (user.isLoggedIn) {
    return <Authincated />;
  } else {
    return <UnAuthicated />;
  }
};

export default RootNavigation;
