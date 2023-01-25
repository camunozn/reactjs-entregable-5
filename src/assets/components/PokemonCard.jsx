import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then(res => setPokemon(res.data));
  }, []);

  const pokemonImg = pokemon.sprites?.other.dream_world.front_default
    ? pokemon.sprites?.other.dream_world.front_default
    : pokemon.sprites?.other.home.front_default;

  return (
    <div
      className="pokemon-card"
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}
    >
      <div className="card-content">
        <div className="content-img">
          <img className="pokemon-img" src={pokemonImg} alt="Pokemon image" />
        </div>
        <div className="content-data">
          <h3 className="heading-tertiary">{pokemon?.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
