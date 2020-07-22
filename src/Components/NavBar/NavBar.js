import React, {useState, useEffect} from 'react';
import {A} from 'hookrouter';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div id="NavBar">
      <div id={'title'}>
        <h1>NHL Stats</h1>
      </div>
      <div id={'links-div'}>
        <A href={'/'}>Home</A>
        <A href={'/teams'}>Teams</A>
        <A href={'/players'}>Players</A>
      </div>
    </div>
  );
};

export {NavBar};
