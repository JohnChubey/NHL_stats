import React, {useState, useEffect} from 'react';
import './MatchUps.scss';

const MatchUps = (props) => {
  return (
    <div className="MatchUps">
      <h2>Match ups for {props.date.format('MMMM Do, YYYY')}</h2>
    </div>
  );
};

export {MatchUps};
