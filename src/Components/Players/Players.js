import React, {useState, useEffect} from 'react';
import './Players.scss';
import {BASE_LOCAL_API, GOALIE, GOALIES, SKATERS} from "../../Extras/Constants";
import {Paginator} from "../Paginator/Paginator";
import * as Header from "../../Extras/TableHeaderConstants";
import { comparatorFactory } from '../../Extras/comparators';

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

  function filterPlayers() {
    if (allPlayers) {
      let filtered;
      if (filter === SKATERS) {
        filtered = allPlayers.filter(player => {
          return player.position.code.toLowerCase() !== GOALIE;
        });
      } else {
        filtered = allPlayers.filter(player => {
          return player.position.code.toLowerCase() === GOALIE;
        });
      }
      debugger;
      const comparatorFunction = comparatorFactory(Header.POINTS);
      filtered.sort(comparatorFunction)
      setFilteredPlayers(filtered);
      setDisplayedPlayers(filtered.slice(0, 20));
    }
  }

  function setDisplayedData(indexStart, indexEnd, players){
    setPlayerIndexStart(indexStart);
    setDisplayedPlayers(players);
  }

  function truncateDecimal(number) {
    if (number) {
      let stringNumber = number.toString();
      return stringNumber.slice(0, stringNumber.indexOf('.') + 2);
    } else {
      return '0';
    }
  }

  function sortPlayerHeader(header){
    console.log(header);
  }

  function getTableHeaders(){
    if(filter === SKATERS){
      return <tr id={'PlayerStatsTable-headers'}>
            <th>Ranking</th>
            <th>Player Name</th>
            <th>Position</th>
            <th onClick={() => sortPlayerHeader(Header.GAMES_PLAYED)}>Games Played</th>
            <th>Goals</th>
            <th>Assists</th>
            <th onClick={() => sortPlayerHeader(Header.POINTS)}>Points</th>
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
    } else {
      return <tr id={'PlayerStatsTable-headers'}>
            <th>Ranking</th>
            <th>Player Name</th>
            <th>Position</th>
            <th>Games Played</th>
            <th>Started</th>
            <th>Record</th>
            <th>Shots</th>
            <th>Saves</th>
            <th>Save %</th>
            <th>Shutouts</th>
            <th>GA</th>
            <th>GAA</th>
            <th>ESH</th>
            <th>ESA</th>
            <th>ESA%</th>
            <th>PPSH</th>
            <th>PPSA</th>
            <th>PPSA%</th>
            <th>SHSH</th>
            <th>SHSA</th>
            <th>SHSA%</th>
            <th>TOI</th>
            <th>TOI/Game</th>
          </tr>
    }
  }

  function getTableData(){
    if(filter === SKATERS){
      return displayedPlayers.map((player, index) => {
            return <tr key={index}>
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
          })
    } else {
      return displayedPlayers.map((player, index) => {
            return <tr key={index}>
              <td>{playerIndexStart + index + 1}</td>
              <td>{player.player.fullName}</td>
              <td>{player.position.abbreviation}</td>
              <td>{player.stats.games}</td>
              <td>{player.stats.gamesStarted}</td>
              <td>{player.stats.wins}-{player.stats.losses}-{player.stats.ot}</td>
              <td>{player.stats.shotsAgainst}</td>
              <td>{player.stats.saves}</td>
              <td>{player.stats.savePercentage}</td>
              <td>{player.stats.shutouts}</td>
              <td>{player.stats.goalsAgainst}</td>
              <td>{player.stats.goalAgainstAverage}</td>
              <td>{player.stats.evenShots}</td>
              <td>{player.stats.evenSaves}</td>
              <td>{truncateDecimal(player.stats.evenStrengthSavePercentage)}%</td>
              <td>{player.stats.powerPlayShots}</td>
              <td>{player.stats.powerPlaySaves}</td>
              <td>{truncateDecimal(player.stats.powerPlaySavePercentage)}%</td>
              <td>{player.stats.shortHandedShots}</td>
              <td>{player.stats.shortHandedSaves}</td>
              <td>{truncateDecimal(player.stats.shortHandedSavePercentage)}%</td>
              <td>{player.stats.timeOnIce}</td>
              <td>{player.stats.timeOnIcePerGame}</td>
            </tr>
          })
    }
  }

  function getPlayerTable() {
    if (displayedPlayers === null) {
      return <p>Loading...</p>
    } else {
      return <div id={'PlayerStatsTable-div'}>
        <table id={'PlayerStatsTable'}>
          <tbody>
          {getTableHeaders()}
          {getTableData()}
          </tbody>
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
        <Paginator className={'Player-Paginator'} data={filteredPlayers} setDisplayedData={setDisplayedData} dataPerPage={20} />
      </div>
    </div>
  );
};

export {Players};
