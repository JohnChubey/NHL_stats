import React, {useState, useEffect} from 'react';
import './MatchUp.scss';
import {AWAY, BASE_LOGO_API, HOME} from "../../Extras/Constants";
import {MatchUpTeamCard} from "../MatchUpTeamCard/MatchUpTeamCard";

const MatchUp = (props) => {
  return (
    <div className="MatchUp">
      <MatchUpTeamCard homeOrAway={HOME} team={props.game.teams.home} />
      <div className={'MatchUp-score-div'}>
        <p>Score</p>
      </div>
      <div className={'MatchUp-series-div'}>
        <p>Series</p>
      </div>
      <MatchUpTeamCard homeOrAway={AWAY} team={props.game.teams.away} />
    </div>
  );
};

export {MatchUp};
