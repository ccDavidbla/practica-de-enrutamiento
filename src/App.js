import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NumeroOTexto from './components/NumberText';
import TextoConColor from './components/ColorText';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:value" element={<NumeroOTexto />} />
          <Route path="/:word/:textColor/:bgColor" element={<TextoConColor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
