import { HashRouter, Route, Routes, ScrollRestoration } from 'react-router-dom';
import Home from './assets/pages/Home';
import Pokedex from './assets/pages/Pokedex';
import PokemonDetail from './assets/pages/PokemonDetail';
import ProtectedRoutes from './assets/pages/ProtectedRoutes';
import './App.css';
import ScrollToTop from './assets/components/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
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
