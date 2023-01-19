import { useState } from "react";
import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InputName from "./assets/components/InputName";
import Pokedex from "./assets/components/Pokedex";
import PokedexDetail from "./assets/components/PokedexDetail";
import userNameSlice from "./store/slices/userName.slice";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InputName />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokedexDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
