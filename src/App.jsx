import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';

function App() {
  const [] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />}></Route>
        <Route path="/players/:id" element={<SinglePlayer />}></Route>
        <Route path="/new-players" element={<NewPlayerForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
