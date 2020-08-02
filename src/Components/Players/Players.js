import React, {useState, useEffect} from 'react';
import './Players.scss';
import {BASE_LOCAL_API} from "../../Extras/Constants";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState(null);
  useEffect( () => {
    fetch(BASE_LOCAL_API + '/players')
      .then(results => results.json())
      .then(res => {
        setAllPlayers(res);
      });
  }, []);

  function getPlayerTable(){
    if(allPlayers === null){
      return <p>Loading...</p>
    } else {
      return <div id={'PlayerStatsTable-div'}>
        <table id={'PlayerStatsTable'}>
          <tr>
            <th>Player Name</th>
            <th>Position</th>
            <th>Games Played</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Points</th>
            <th>+/-</th>
            <th>Shots</th>
            <th>Shot %</th>
            <th>Shifts</th>
            <th>TOI/G</th>
            <th>Blocked Shots</th>
            <th>Hits</th>
            <th>PIM</th>
            <th>SHG</th>
            <th>SHP</th>
            <th>SHTOI</th>
            <th>PPG</th>
            <th>PPP</th>
            <th>PPTOI</th>
          </tr>
          {allPlayers.map(player => {
            return <tr>
              <td>{player.player.fullName}</td>
              <td>{player.position.abbreviation}</td>
              <td>{player.stats.games}</td>
              <td>{player.stats.goals}</td>
              <td>{player.stats.assists}</td>
              <td>{player.stats.points}</td>
              <td>{player.stats.plusMinus}</td>
              <td>{player.stats.shots}</td>
              <td>{player.stats.shotPct}%</td>
              <td>{player.stats.shifts}</td>
              <td>{player.stats.timeOnIcePerGame}</td>
              <td>{player.stats.blocked}</td>
              <td>{player.stats.hits}</td>
              <td>{player.stats.pim}</td>
              <td>{player.stats.shortHandedGoals}</td>
              <td>{player.stats.shortHandedPoints}</td>
              <td>{player.stats.shortHandedTimeOnIcePerGame}</td>
              <td>{player.stats.powerPlayGoals}</td>
              <td>{player.stats.powerPlayPoints}</td>
              <td>{player.stats.powerPlayTimeOnIcePerGame}</td>
            </tr>
          })}
        </table>
      </div>
    }
  }

  return (
    <div className="Players">
      {getPlayerTable()}
    </div>
  );
};

export {Players};
