import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />}></Route>
        <Route path="/players/:id" element={<SinglePlayer />}></Route>
        <Route path="/add-player" element={<NewPlayerForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
