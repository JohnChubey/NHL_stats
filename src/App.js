import React, {useState, useEffect} from 'react';
import {BASE_API} from "./Extras/Constants";
import {TeamCard} from "./Components/TeamCard/TeamCard";
import {NavBar} from "./Components/NavBar/NavBar";
import './App.scss';

const App = () => {
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
    <div className="App">
      <NavBar />
      <label htmlFor="searchbar">Search Teams: </label>
      <input id={'searchbar'} value={searchbarInput} type="text" placeholder={'Search for teams here'}
             onChange={handleSearchbarChange}/>
      <div id={'Team-card-layout-div'}>
        {filteredTeams.map((team, index) => {
          return <TeamCard index={index} key={team.id} team={team}/>
        })}
      </div>
    </div>
  );
};

export {App};
