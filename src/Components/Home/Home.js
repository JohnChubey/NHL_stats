import React, {useState, useEffect} from 'react';
import './Home.scss';
import {MatchUps} from "../MatchUps/MatchUps";
import moment from 'moment';

const Home = () => {
  const [date, setDate] = useState(moment());

  return (
    <div className="Home">
      <MatchUps date={date} />
    </div>
  );
};

export {Home};
