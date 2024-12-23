import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import GameBasics from './components/game/basics/GameBasics';
import Classes from './components/game/character/Classes';
import Skills from './components/game/character/Skills';
import SpiritSystem from './components/game/basics/SpiritSystem';
import AtlasBasics from './components/game/progression/AtlasBasics';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <div className="container mx-auto px-4 py-4">
          <Routes>
            <Route path="/" element={<GameBasics />} />
            <Route path="/basics" element={<GameBasics />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/spirit" element={<SpiritSystem />} />
            <Route path="/atlas-basics" element={<AtlasBasics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
