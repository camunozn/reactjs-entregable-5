import React from 'react';
import pokedexImg from '../img/pokedex_title.png';
import pokeballImg from '../img/pokeball.png';

const Header = () => {
  return (
    <div className="header">
      <img className="title-img" src={pokedexImg} alt="Pokedex image" />
      <img className="logo-img" src={pokeballImg} alt="Pokeball image" />
    </div>
  );
};

export default Header;
