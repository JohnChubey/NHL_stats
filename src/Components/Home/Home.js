import React, {useState, useEffect} from 'react';
import './Home.scss';
import {MatchUps} from "../MatchUps/MatchUps";


const Home = () => {
  return (
    <div className="Home">
      <MatchUps />
    </div>
  );
};

export {Home};
