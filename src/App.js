import React, { useState, useEffect } from 'react';
import API from './Api.js';
import './style.css';

export default function App() {
  // const [pokemons, setPokemons] = useState(['Pikachu', 'Raichu', 'Charizard']);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonInput, setPokemonInput] = useState('');

  useEffect(() => {
    API.getPokemons().then(res => {
      setPokemons(res);
    });
  }, []);

  function pokemonInputChangeHandler(evt) {
    setPokemonInput(evt.target.value);
  }

  function addPokemonToTheList() {
    let localPokemonList = [...pokemons];
    localPokemonList.push(pokemonInput);
    setPokemons(localPokemonList);
  }

  return (
    <div className="pokemons">
      <h1>Pokemon List</h1>
      <div className="pokemon-list">
        <div>
          <b>Pokemons I have</b>
        </div>
        <ul>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <li key={index.toString()}>{pokemon}</li>;
            })}
        </ul>
      </div>

      <div className="add-pokemon">
        <b>Add Pokemon</b>
        <div className="input">
          <input
            name="pokemon"
            onChange={pokemonInputChangeHandler}
            value={pokemonInput}
          />
          <button onClick={addPokemonToTheList}>Add</button>
        </div>
      </div>
    </div>
  );
}
