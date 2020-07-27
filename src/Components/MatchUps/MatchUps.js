import React, {useState, useEffect} from 'react';
import './MatchUps.scss';
import {BASE_API} from "../../Extras/Constants";
import {MatchUp} from "../MatchUp/MatchUp";
import moment from 'moment';

const MatchUps = (props) => {
  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().startOf('week').add(7, 'd').format('YYYY-MM-DD'));
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(BASE_API + 'schedule?startDate=' + startDate + '&endDate=' + endDate)
      .then(results => results.json())
      .then(res => {
        setGames(res);
      });
  }, [startDate, endDate]);

  function getMatchups() {
    if(games && games.dates) {
      return games.dates.map((date, index) => {
        return <div className={'Matchups-dates-div'} key={index}>
          <h2>Match-ups for {moment(date.date).format("MMMM Do, YYYY")}:</h2>
          <div className={'Matchups-games-div'}>
            {date.games.map((game, index) => {
              return <MatchUp key={game.gamePk} game={game}/>
            })}
          </div>
        </div>
      })
    } else{
      return <h2>No games this week</h2>
    }
  }

  return (
    <div className="MatchUps">
      {getMatchups()}
    </div>
  );
};

export {MatchUps};
