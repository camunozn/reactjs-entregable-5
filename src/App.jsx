import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/views/Home';
import Pokedex from './assets/views/Pokedex';
import PokemonDetail from './assets/views/PokemonDetail';
import ProtectedRoutes from './assets/views/ProtectedRoutes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
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
