import React, {useState, useEffect} from 'react';
import './Players.scss';
import {BASE_LOCAL_API, GOALIE, GOALIES, SKATERS} from "../../Extras/Constants";
import {Paginator} from "../Paginator/Paginator";
import * as Header from "../../Extras/TableHeaderConstants";
import { getComparator } from '../../Extras/comparators';

const Players = () => {
  const [allPlayers, setAllPlayers] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState(null);
  const [tableFilter, setTableFilter] = useState(Header.POINTS);
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
  }, [allPlayers, filter, tableFilter]);

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
      const comparatorFunction = getComparator(tableFilter);
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
    setTableFilter(header);
    console.log(header);
  }

  function getTableHeaders(){
    if(filter === SKATERS){
      return <tr id={'PlayerStatsTable-headers'}>
            <th>Ranking</th>
            <th>Player Name</th>
            <th>Position</th>
            <th onClick={() => sortPlayerHeader(Header.GAMES_PLAYED)}>Games Played</th>
            <th onClick={() => sortPlayerHeader(Header.GOALS)}>Goals</th>
            <th onClick={() => sortPlayerHeader(Header.ASSISTS)}>Assists</th>
            <th onClick={() => sortPlayerHeader(Header.POINTS)}>Points</th>
            <th onClick={() => sortPlayerHeader(Header.PLUS_MINUS)}>+/-</th>
            <th onClick={() => sortPlayerHeader(Header.SHOTS)}>Shots</th>
            <th onClick={() => sortPlayerHeader(Header.SHOT_PCT)}>Shot %</th>
            <th onClick={() => sortPlayerHeader(Header.SHIFTS)}>Shifts</th>
            <th onClick={() => sortPlayerHeader(Header.TIME_ON_ICE)}>TOI/G</th>
            <th onClick={() => sortPlayerHeader(Header.BLOCKED_SHOTS)}>Blocked Shots</th>
            <th onClick={() => sortPlayerHeader(Header.HITS)}>Hits</th>
            <th onClick={() => sortPlayerHeader(Header.PENALTY_MIN)}>PIM</th>
            <th onClick={() => sortPlayerHeader(Header.SHORT_HANDED_GOALS)}>SHG</th>
            <th onClick={() => sortPlayerHeader(Header.SHORT_HANDED_POINTS)}>SHP</th>
            <th onClick={() => sortPlayerHeader(Header.SHORT_HANDED_TOI)}>SHTOI</th>
            <th onClick={() => sortPlayerHeader(Header.POWER_PLAY_GOALS)}>PPG</th>
            <th onClick={() => sortPlayerHeader(Header.POWER_PLAY_POINTS)}>PPP</th>
            <th onClick={() => sortPlayerHeader(Header.POWER_PLAY_TOI)}>PPTOI</th>
            <th onClick={() => sortPlayerHeader(Header.GAME_WINNING_GOALS)}>GWG</th>
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
