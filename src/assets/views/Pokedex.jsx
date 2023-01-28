import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCurrentPage } from '../../store/slices/currentPage.slice';
import { setFilteredType } from '../../store/slices/filteredType.slice';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import PokemonCard from '../components/PokemonCard';

const Pokedex = () => {
  const userName = useSelector(state => state.userName);
  const currentPage = useSelector(state => state.currentPage);
  const resultsPerPage = useSelector(state => state.resultsPerPage);
  const filteredType = useSelector(state => state.filteredType);

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsCurrPage, setPokemonsCurrPage] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [searchedPokemon, setSearchedPokemon] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allPokemonsUrl =
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279';
  const allTypesUrl = 'https://pokeapi.co/api/v2/type/?offset=0&limit=20';

  useEffect(() => {
    // Get pokemons data
    if (filteredType !== '') {
      axios.get(filteredType).then(res => {
        const data = res.data.pokemon;
        setPokemons(data);
        paginate(data, currentPage);
      });
    } else {
      axios.get(allPokemonsUrl).then(res => {
        const data = res.data.results;
        setPokemons(data);
        paginate(data, currentPage);
      });
    }

    // Get all types array
    axios
      .get(allTypesUrl)
      .then(res => setPokemonTypes(res.data.results.slice(0, -2)));
  }, []);

  const searchPokemon = inputSearch => {
    navigate(`/pokedex/${inputSearch.toLowerCase()}`);
  };

  const filterType = e => {
    // Save filtered type url
    e.target.selectedIndex !== 0
      ? dispatch(setFilteredType(e.target.value))
      : dispatch(setFilteredType(''));
    // Get filtered type url data
    axios.get(e.target.value).then(res => {
      const data = res.data.pokemon ? res.data.pokemon : res.data.results;
      setPokemons(data);
      paginate(data, 1);
    });
  };

  useEffect(() => {
    paginate(pokemons, currentPage);
  }, [currentPage]);

  const paginate = (pokemons, currPage) => {
    const lastResultIndex = currPage * resultsPerPage;
    const firstResultIndex = lastResultIndex - resultsPerPage;
    setPokemonsCurrPage(pokemons.slice(firstResultIndex, lastResultIndex));
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
                  placeholder="Search a pokemon by name or id"
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
                <select
                  className="select filter-select"
                  value={filteredType}
                  onChange={e => {
                    dispatch(changeCurrentPage(1));
                    filterType(e);
                  }}
                >
                  <option value={allPokemonsUrl}>All types</option>
                  {pokemonTypes?.map(type => (
                    <option key={type.name} value={type.url}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          <section className="section-cards">
            <div className="cards-pagination">
              <Pagination pokemons={pokemons} />
            </div>
            <div className="cards-display">
              {pokemonsCurrPage.map(pokemon => {
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
