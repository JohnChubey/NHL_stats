import React, {useState, useEffect} from 'react';
import {BASE_API} from "../../Extras/Constants";
import {TeamCard} from "../TeamCard/TeamCard";
import './Teams.scss';

const Teams = () => {
  const [searchbarInput, setSearchbarInput] = useState('');
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState(teams);
  useEffect( () => {
    fetch(BASE_API + 'teams?expand=team.stats')
      .then(results => results.json())
      .then(res => {
        setTeams(res.teams);
      });
  }, []);

  useEffect(() => {
      setFilteredTeams(teams.filter(team => team.name.toLowerCase().includes(searchbarInput.toLowerCase())));
    }, [teams, searchbarInput]);

  function handleSearchbarChange(e){
    setSearchbarInput(e.target.value);
  }

  return (
    <div className="Teams">
      <input id={'Teams-searchbar'} value={searchbarInput} type="text" placeholder={'Search teams'}
             onChange={handleSearchbarChange}/>
      <div id={'Team-card-layout-div'}>
        {filteredTeams.map((team, index) => {
          return <TeamCard index={index} key={team.id} team={team}/>
        })}
      </div>
    </div>
  );
};

export {Teams};
