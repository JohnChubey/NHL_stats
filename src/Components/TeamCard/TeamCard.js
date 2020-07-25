import React, {useState} from 'react';
import './TeamCard.scss';
import {BASE_LOGO_API} from "../../Extras/Constants";

const TeamCard = (props) => {
  const [focused, setFocused] = useState(false);
  function getExtraInfo() {
    if (focused) {
      return <div className={'TeamCard-extra-info-div'}>
        <p><span className={'extra-info-title'}>Venue Name: </span>{getAttributeName(props.team.venue)}</p>
        <p><span className={'extra-info-title'}>Conference: </span>{getAttributeName(props.team.conference)}</p>
        <p><span className={'extra-info-title'}>Division: </span>{getAttributeName(props.team.division)}</p>
        <p><span className={'extra-info-title'}>First year of play: </span>{props.team.firstYearOfPlay}</p>
        {getStats(props.team)}
      </div>
    }
  }

  function getStats(team) {
  if (team.teamStats && team.teamStats[0].splits && team.teamStats[0].splits[0].stat) {
    let stats = team.teamStats[0].splits[0].stat;
    return <div>
      <p><span className={'extra-info-title'}>Games Played: </span>{stats.gamesPlayed}</p>
      <p><span className={'extra-info-title'}>Wins: </span>{stats.wins}</p>
      <p><span className={'extra-info-title'}>Losses: </span>{stats.losses}</p>
      <p><span className={'extra-info-title'}>OT: </span>{stats.ot}</p>
      <p><span className={'extra-info-title'}>Points: </span>{stats.pts}</p>
      <p><span className={'extra-info-title'}>Goals/game: </span>{stats.goalsPerGame}</p>
      <p><span className={'extra-info-title'}>Goals against/game: </span>{stats.goalsAgainstPerGame}</p>
    </div>
  } else {
    return 'Loading team stats...';
  }
}

  return (
    <a onClick={() => setFocused(!focused)}>
      <div className="TeamCard">
        <div>
        </div>
        <div className={'TeamCard-title-div'}>
          <img className={'Team-logo-img'} src={BASE_LOGO_API + props.team.id + '.svg'}/>
          <h3 className={'Team-name'}>{props.team.name}</h3>
        </div>
        {getExtraInfo()}
      </div>
    </a>
  );
};

function getAttributeName(attribute) {
  if (attribute) {
    return attribute.name;
  } else {
    return 'Loading...';
  }
}

export {TeamCard};
