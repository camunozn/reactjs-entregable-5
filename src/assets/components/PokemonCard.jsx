import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImg from '../img/help-outline.svg';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then(res => setPokemon(res.data));
  }, []);

  const pokemonImg = pokemon.sprites?.other.dream_world.front_default
    ? pokemon.sprites?.other.dream_world.front_default
    : defaultImg;

  const typeClass = `pokemon-type-${pokemon.types?.[0].type.name}`;

  return (
    <div
      className={`pokemon-card ${typeClass}`}
      onClick={() => navigate(`/pokedex/${pokemon.id}`)}
    >
      <div className="card-content">
        <div className="content-img">
          <img className="pokemon-img" src={pokemonImg} alt="Pokemon image" />
        </div>
        <div className="content-data">
          <div className="data-heading">
            <h3 className={`heading-tertiary ${typeClass}`}>{pokemon?.name}</h3>
            <p className={`data-types`}>
              {pokemon.types?.map((type, index) => (
                <span key={type.type.name}>
                  {index === pokemon?.types.length - 1
                    ? `${type.type.name}`
                    : `${type.type.name} / `}
                </span>
              ))}
            </p>
            <h4 className="heading-quaternary">Type</h4>
          </div>
          <div className="data-main">
            <div>
              <h4 className="heading-quaternary">HP</h4>
              <p className={`data-number ${typeClass}`}>
                {pokemon.stats?.[0].base_stat}
              </p>
            </div>
            <div>
              <h4 className="heading-quaternary">ATTACK</h4>
              <p className={`data-number ${typeClass}`}>
                {pokemon.stats?.[1].base_stat}
              </p>
            </div>
            <div>
              <h4 className="heading-quaternary">DEFENSE</h4>
              <p className={`data-number ${typeClass}`}>
                {pokemon.stats?.[2].base_stat}
              </p>
            </div>
            <div>
              <h4 className="heading-quaternary">SPEED</h4>
              <p className={`data-number ${typeClass}`}>
                {pokemon.stats?.[5].base_stat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
