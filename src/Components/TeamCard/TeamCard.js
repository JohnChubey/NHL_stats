import React, {useState} from 'react';
import './TeamCard.css';

const TeamCard = (props) => {
  const [focused, setFocused] = useState(false);

  function getExtraInfo() {
    if (focused) {
      return <div>
        <p><span className={'extra-info-title'}>Venue Name: </span>{getTeamAttribute(props.team.venue)}</p>
        <p><span className={'extra-info-title'}>Conference: </span>{getTeamAttribute(props.team.conference)}</p>
        <p><span className={'extra-info-title'}>Division: </span>{getTeamAttribute(props.team.division)}</p>
      </div>
    }
  }


  return (
    <a onClick={() => setFocused(!focused)}>
      <div className="TeamCard">
        <div>
          <h3>{props.index + 1}) {props.team.name}</h3>
        </div>
        {getExtraInfo()}
      </div>
    </a>
  );
};

function getTeamAttribute(attribute){
  if(attribute){
    return attribute.name;
  }
  else {
    return 'Loading...';
  }

}

export {TeamCard};
