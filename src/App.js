import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Projects from './containers/Projects';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={Home} />
          <Route exact path="/projects" element={Projects} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
