import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const userName = useSelector(state => state.userName);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then(res => setPokemons(res.data.results));

    axios
      .get('https://pokeapi.co/api/v2/type/?offset=0&limit=20')
      .then(res => setPokemonTypes(res.data.results));
  }, []);

  const searchPokemon = inputSearch => {
    navigate(`/pokedex/${inputSearch.toLowerCase()}`);
  };

  const filterType = e => {
    axios.get(e.target.value).then(res => setPokemons(res.data.pokemon));
  };

  return (
    <div>
      <h2>Pokedex</h2>
      <h3>Welcome {userName}</h3>
      <div className="search-box">
        <input
          type="text"
          value={searchedPokemon}
          onChange={e => setSearchedPokemon(e.target.value)}
        />
        <button onClick={() => searchPokemon(searchedPokemon)}>search</button>
      </div>
      <div className="type-filter">
        <select name="" id="" onChange={filterType}>
          {pokemonTypes?.map(type => (
            <option value={type.url} key={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div className="pokemons-cards">
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
