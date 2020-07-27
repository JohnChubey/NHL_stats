import React, {useState, useEffect} from 'react';
import './MatchUp.scss';
import {AWAY, BASE_LOGO_API, HOME} from "../../Extras/Constants";
import moment from 'moment';

const MatchUp = (props) => {
  return (
    <div className="MatchUp">
      <div className="HomeMatchUp">
        <p className='MatchUp-Home-Text'>Home</p>
        <img className={'MatchUp-logo'} src={BASE_LOGO_API + props.game.teams.home.team.id + '.svg'} alt=""/>
        <p className={'MatchUp-team-name'}>{props.game.teams.home.team.name}</p>
        <p className={'MatchUp-team-record'}>{props.game.teams.home.leagueRecord.wins}-{props.game.teams.home.leagueRecord.losses}</p>
      </div>
      <div className={'MatchUp-score-div'}>
        <p>Score</p>
      </div>
      <div className={'MatchUp-series-div'}>
        <p>Series</p>
      </div>
      <div className="AwayMatchUp">
        <p className={'MatchUp-Away-Text'}>Away</p>
        <img className={'MatchUp-logo'} src={BASE_LOGO_API + props.game.teams.away.team.id + '.svg'} alt=""/>
        <p className={'MatchUp-team-name'}>{props.game.teams.away.team.name}</p>
        <p className={'MatchUp-team-record'}>{props.game.teams.away.leagueRecord.wins}-{props.game.teams.away.leagueRecord.losses}</p>
      </div>
      <div className={'MatchUp-extra-info-div'}>
        <p>{props.game.venue.name} @ {moment(props.game.gameDate).format('h:mm A')}</p>
      </div>
      {/*<div className={'vs-div'}>*/}
      {/*  <p className={'vs-text'}>vs</p>*/}
      {/*</div>*/}
    </div>
  );
};

export {MatchUp};
