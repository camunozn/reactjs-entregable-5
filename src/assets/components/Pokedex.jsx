import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokedex = () => {
  const userName = useSelector(state => state.userName);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then(res => setPokemons(res.data.results));
  }, []);

  return (
    <div>
      <h2>Pokedex</h2>
      <h3>Welcome {userName}</h3>
      <div className="pokemons-cards">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
