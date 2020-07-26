import React, {useState, useEffect} from 'react';
import './MatchUp.scss';
import {BASE_LOGO_API} from "../../Extras/Constants";

const MatchUp = (props) => {
  return (
    <div className="MatchUp">
      <div className={'MatchUp-home-div'}>
        <p className={'MatchUp-title'}>Home</p>
        <img className={'M'} src={BASE_LOGO_API + props.game.teams.home.team.id + '.svg'} alt=""/>
        <p className={'MatchUp-team-name'}>{props.game.teams.home.team.name}</p>
        <p className={'MatchUp-team-record'}>{props.game.teams.home.leagueRecord.wins}-{props.game.teams.home.leagueRecord.losses}</p>
      </div>
      <div className={'MatchUp-score-div'}>
        <p>Score</p>
      </div>
      <div className={'MatchUp-series-div'}>
        <p>Series</p>
      </div>
      <div className={'MatchUp-away-div'}>
        <p className={'MatchUp-title'}>Away</p>
        <img src={BASE_LOGO_API + props.game.teams.away.team.id + '.svg'} alt=""/>
        <p className={'MatchUp-team-name'}>{props.game.teams.away.team.name}</p>
        <p className={'MatchUp-team-record'}>{props.game.teams.away.leagueRecord.wins}-{props.game.teams.away.leagueRecord.losses}</p>
      </div>
    </div>
  );
};

export {MatchUp};
