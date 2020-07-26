import React, {useState, useEffect} from 'react';
import './MatchUpTeamCard.scss';
import {BASE_LOGO_API, HOME} from "../../Extras/Constants";

const MatchUpTeamCard = (props) => {
  function getHomeOrAway(){
    if(props.homeOrAway === HOME){
      return 'Home'
    } else{
      return 'Away'
    }
  }

  function getHomeOrAwayStyling(){
    if(props.homeOrAway === HOME){
      return 'MatchUpTeamCard-Home'
    } else{
      return 'MatchUpTeamCard-Away'
    }
  }

  return (
    <div className="MatchUpTeamCard">
      <p className={getHomeOrAwayStyling()}>{getHomeOrAway()}</p>
      <img className={'MatchUpTeamCard-logo'} src={BASE_LOGO_API + props.team.team.id + '.svg'} alt=""/>
      <p className={'MatchUpTeamCard-team-name'}>{props.team.team.name}</p>
      <p className={'MatchUpTeamCard-team-record'}>{props.team.leagueRecord.wins}-{props.team.leagueRecord.losses}</p>
    </div>
  );
};

export {MatchUpTeamCard};
