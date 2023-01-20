import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import InputName from './assets/components/InputName';
import Pokedex from './assets/components/Pokedex';
import PokemonDetail from './assets/components/PokemonDetail';
import ProtectedRoutes from './assets/components/ProtectedRoutes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<InputName />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
