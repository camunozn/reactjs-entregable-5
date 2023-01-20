import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then(res => setPokemon(res.data));
  }, []);

  return (
    <div
      className="pokemon-card"
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}
    >
      <h4>{pokemon?.name}</h4>
      <img
        src={pokemon.sprites?.other.dream_world.front_default}
        alt="Pokemon image"
      />
    </div>
  );
};

export default PokemonCard;
