import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../../store/slices/userName.slice';
import pokedexImg from '../img/pokedex_title.png';
import Footer from './Footer';

const Home = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="home container">
      <header></header>
      <main>
        <section className="section-home">
          <div className="home-title">
            <img src={pokedexImg} alt="Pokedex title" />
          </div>
          <div className="home-welcome">
            <h1 className="heading-primary">Hello trainer!</h1>
            <p>Type your name to start the journey:</p>
          </div>
          <div className="home-input">
            <input
              className="input name-input"
              placeholder="Type your name here"
              type="text"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <button
              className="btn btn--input"
              onClick={() => {
                dispatch(changeUserName(user));
                navigate('/pokedex');
              }}
            >
              Let's begin
            </button>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
