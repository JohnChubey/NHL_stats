import React, {useState, useEffect} from 'react';
import './MatchUps.scss';
import {BASE_API} from "../../Extras/Constants";
import {MatchUp} from "../MatchUp/MatchUp";
import moment from 'moment';

const MatchUps = (props) => {
  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().startOf('week'));
  const [numberOfSearchIterations, setNumberOfSearchIterations] = useState(1);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(BASE_API + 'schedule?startDate=' + startDate + '&endDate=' + getEndDate())
      .then(results => results.json())
      .then(res => {
        setGames(res);
      });
  }, [startDate, endDate, numberOfSearchIterations]);

  useEffect(() => {
    window.addEventListener("scroll", handleWeekLoad);
    return () => window.removeEventListener("scroll", handleWeekLoad);
  }, []);

  function getEndDate() {
    return endDate.add(numberOfSearchIterations * 3, 'd').format('YYYY-MM-DD')
  }

  function getMatchups() {
    if(games && games.dates) {
      return games.dates.map((date, index) => {
        return <div className={'Matchups-dates-div'} key={index}>
          <h2>Games on {moment(date.date).format("MMMM Do, YYYY")}:</h2>
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

  function handleWeekLoad(e){
    let bottom = e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop === e.target.documentElement.clientHeight;
    if(bottom && numberOfSearchIterations < 6){
      let numIterations = numberOfSearchIterations;
      debugger;
      setNumberOfSearchIterations(numberOfSearchIterations + 1);
    }
  }

  return (
    <div className="MatchUps">
      {getMatchups()}
    </div>
  );
};

export {MatchUps};
