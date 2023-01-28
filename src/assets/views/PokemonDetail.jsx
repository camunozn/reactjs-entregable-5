import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import StatsBar from '../components/StatsBar';
import defaultImg from '../img/default-img.png';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const pokemonImg = pokemon.sprites?.other.dream_world.front_default
    ? pokemon.sprites?.other.dream_world.front_default
    : defaultImg;

  const typeClass = `pokemon-type-${pokemon.types?.[0].type.name}`;

  return (
    <div className="pokemon-detail">
      <header>
        <Header />
      </header>
      <main className="detail-container">
        <div className="detail-box">
          <div className="box-heading">
            <div className={`heading-img ${typeClass}`}>
              <img src={pokemonImg} alt="Pokemon image" />
            </div>
            <div className="heading-title">
              <h2
                className={`heading-secondary ${typeClass}`}
              >{`# ${pokemon?.id}`}</h2>
              <h3 className={`heading-tertiary ${typeClass}`}>
                {pokemon?.name}
              </h3>
            </div>
          </div>
          <div className="box-main">
            <div className="main-measures">
              <div>
                <h4 className="heading-quaternary">Weight</h4>
                <p>{pokemon?.weight}</p>
              </div>
              <div>
                <h4 className="heading-quaternary">Height</h4>
                <p>{pokemon?.height}</p>
              </div>
            </div>
            <div className="main-features">
              <div className="features-types">
                <h3 className="heading-tertiary">Type</h3>
                <div className="types-boxes">
                  {pokemon.types?.map(type => (
                    <span
                      className={`pokemon-type-${type.type.name}`}
                      key={type.type.name}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="features-abilities">
                <h3 className="heading-tertiary">Abilities</h3>
                <div className="abilities-boxes">
                  {pokemon.abilities?.map(ability => (
                    <span key={ability.ability.name}>
                      {ability.ability.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="main-stats">
              <h2 className="heading-secondary">Statistics</h2>
              <div className="stats-bars">
                <StatsBar
                  title={'HP'}
                  value={pokemon.stats?.[0].base_stat}
                  typeClass={typeClass}
                />
                <StatsBar
                  title={'Attack'}
                  value={pokemon.stats?.[1].base_stat}
                  typeClass={typeClass}
                />
                <StatsBar
                  title={'Defense'}
                  value={pokemon.stats?.[2].base_stat}
                  typeClass={typeClass}
                />
                <StatsBar
                  title={'Speed'}
                  value={pokemon.stats?.[5].base_stat}
                  typeClass={typeClass}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="movements-box"></div>
      </main>
    </div>
  );
};

export default PokemonDetail;
