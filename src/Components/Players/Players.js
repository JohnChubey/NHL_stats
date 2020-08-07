import React, {useState, useEffect} from 'react';
import './Players.scss';
import {BASE_LOCAL_API, GOALIE, GOALIES, SKATERS} from "../../Extras/Constants";
import {Paginator} from "../Paginator/Paginator";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState(null);
  const [displayedPlayers, setDisplayedPlayers] = useState(null);
  const [playerIndexStart, setPlayerIndexStart] = useState(0);
  const [filter, setFilter] = useState(SKATERS);
  useEffect( () => {
    fetch(BASE_LOCAL_API + '/players')
      .then(results => results.json())
      .then(res => {
        setAllPlayers(res);
      });
  }, []);

  useEffect( () => {
    filterPlayers();
  }, [allPlayers, filter]);

  // useEffect( () => {
  //   debugger;
  //   let players = filteredPlayers;
  //   if (filteredPlayers){
  //     setDisplayedPlayers(filteredPlayers.slice(playerIndexStart, playerIndexStart + 20));
  //   }
  // }, [filteredPlayers]);

  function filterPlayers() {
    if (allPlayers) {
      if (filter === SKATERS) {
        let filtered = allPlayers.filter(player => {
          return player.position.code.toLowerCase() !== GOALIE;
        });
        setFilteredPlayers(filtered);
        setDisplayedPlayers(filtered.slice(0, 20));
      } else {
        let filtered = allPlayers.filter(player => {
          return player.position.code.toLowerCase() === GOALIE;
        });
        setFilteredPlayers(filtered);
        setDisplayedPlayers(filtered.slice(0, 20));
      }
    }
  }

  function setDisplayedData(indexStart, indexEnd, players){
    setPlayerIndexStart(indexStart);
    setDisplayedPlayers(players);
  }

  function getPlayerTable(){
    if(displayedPlayers === null){
      return <p>Loading...</p>
    } else {
      return <div id={'PlayerStatsTable-div'}>
        <table id={'PlayerStatsTable'}>
          <tr id={'PlayerStatsTable-headers'}>
            <th>Ranking</th>
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
            <th>GWG</th>
          </tr>
          {displayedPlayers.map((player, index) => {
            return <tr>
              <td>{playerIndexStart + index + 1}</td>
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
              <td>{player.stats.gameWinningGoals}</td>
            </tr>
          })}
        </table>
      </div>
    }
  }

  function handlePlayerFilterChange(e){
    setFilter(e.target.value);
  }

  return (
    <div className="Players">
      <div id={'Players-type-dropdown-div'}>
        <select name="player-type" id="player-type-dropdown" onChange={handlePlayerFilterChange}>
          <option value={SKATERS}>Skaters</option>
          <option value={GOALIES}>Goalies</option>
        </select>
      </div>
      {getPlayerTable()}
      <div id={'Players-pagination'}>
        <Paginator data={filteredPlayers} setDisplayedData={setDisplayedData} dataPerPage={20} />
      </div>
    </div>
  );
};

export {Players};
