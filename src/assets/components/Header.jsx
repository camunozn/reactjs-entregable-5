import React from 'react';
import pokedexImg from '../img/pokedex_title.png';
import pokeballImg from '../img/pokeball.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        className="title-img"
        src={pokedexImg}
        alt="Pokedex image"
        onClick={() => navigate('/pokedex')}
      />
      <img className="logo-img" src={pokeballImg} alt="Pokeball image" />
    </div>
  );
};

export default Header;
