import React, {useState, useEffect} from 'react';
import {A} from 'hookrouter';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div id="NavBar">
      <div id={'title'}>
        <A className={'NavBarLink'} href={'/'}><h1>NHL Stats</h1></A>
      </div>
      <div id={'links-div'}>
        <A className={'NavBarLink'} href={'/'}><button className='NavBarLinkButton'>Home</button></A>
        <A className={'NavBarLink'} href={'/teams'}><button className='NavBarLinkButton'>Teams</button></A>
        <A className={'NavBarLink'} href={'/players'}><button className='NavBarLinkButton'>Players</button></A>
      </div>
    </div>
  );
};

export {NavBar};
