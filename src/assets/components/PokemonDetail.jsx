import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <div>
      <h2>PokemonDetail</h2>
      <h2>{pokemon?.name}</h2>
      <img src={pokemonImg} alt="" />
    </div>
  );
};

export default PokemonDetail;
