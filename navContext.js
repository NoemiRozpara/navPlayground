import React from 'react';

export const NavContext = React.createContext({nav: null, setNav: () => {}});

let leftNav = null;

export const setLeftNav = navigation => {
  leftNav = navigation;
};

export const getLeftNav = () => leftNav;

let rightNav = null;

export const setRightNav = navigation => {
  rightNav = navigation;
};

export const getRightNav = () => rightNav;
