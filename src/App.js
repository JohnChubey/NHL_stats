import React, {useState, useEffect} from 'react';
import {BASE_API} from "./Extras/Constants";
import {TeamCard} from "./Components/TeamCard/TeamCard";
import './App.css';

const App = () => {
  const [searchbarInput, setSearchbarInput] = useState('');

  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState(teams);
  useEffect( () => {
    fetch(BASE_API + 'teams')
      .then(results => results.json())
      .then(res => {
        setTeams(res.teams);
      });
  }, []);

  useEffect(() => {
      console.log('hello'.includes(''));
      setFilteredTeams(teams.filter(team => team.name.includes(searchbarInput)));
    }, [teams, searchbarInput]);

  function handleSearchbarChange(e){
    setSearchbarInput(e.target.value);
  }

  return (
    <div className="App">
      <label htmlFor="searchbar">Search Teams: </label>
      <input id={'searchbar'} value={searchbarInput} type="text" placeholder={'Search for teams here'}
             onChange={handleSearchbarChange} />
      {filteredTeams.map((team, index) => {
        return <TeamCard index={index} key={team.id} team={team} />
      })}
    </div>
  );
};

export {App};
