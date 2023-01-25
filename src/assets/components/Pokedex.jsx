import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
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
      .then(res => setPokemonTypes(res.data.results.slice(0, -2)));
  }, []);

  const searchPokemon = inputSearch => {
    navigate(`/pokedex/${inputSearch.toLowerCase()}`);
  };

  const filterType = e => {
    axios.get(e.target.value).then(res => setPokemons(res.data.pokemon));
  };

  return (
    <div className="pokedex">
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <section className="section-search">
            <h2 className="heading-secondary">
              <span>Welcome {userName},</span> here you can find your favorite
              pokemon
            </h2>
            <div className="search-boxes">
              <div className="search-box">
                <input
                  className="input search-input"
                  type="text"
                  value={searchedPokemon}
                  onChange={e => setSearchedPokemon(e.target.value)}
                />
                <button
                  className="btn btn--search"
                  onClick={() => searchPokemon(searchedPokemon)}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <div className="filter-box">
                <select className="select filter-select" onChange={filterType}>
                  {pokemonTypes?.map(type => (
                    <option value={type.url} key={type.name}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          <section className="section-cards">
            <div className="pokemon-cards">
              {pokemons.map(pokemon => {
                return (
                  <PokemonCard
                    key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                    url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Pokedex;
