import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/layout/Home';
import Entry from './components/layout/Entry';
import Search from './components/common/Search';
import Classes from './components/game/character/Classes';
import Skills from './components/game/character/Skills';
import Beginner from './components/game/character/Beginner';
import Translation from './components/translations/Translation';
import GameBasics from './components/game/basics/GameBasics';
import AscendancySystem from './components/game/ascendancy/AscendancySystem';
import PassiveTree from './components/game/character/PassiveTree';
import AtlasTree from './components/game/progression/AtlasTree';
import AtlasBasics from './components/game/progression/AtlasBasics';
import Navigation from './components/common/Navigation';
import SearchBar from './components/common/SearchBar';
import PatchNotes from './components/updates/PatchNotes';
import StoryGuide from './components/game/story/StoryGuide';
import SpiritSystem from './components/game/basics/SpiritSystem';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navigation />
        <div className="container mx-auto px-4 py-4">
          <SearchBar />
        </div>
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry/:id" element={<Entry />} />
            <Route path="/search" element={<Search />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/beginner" element={<Beginner />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/basics" element={<GameBasics />} />
            <Route path="/spirit" element={<SpiritSystem />} />
            <Route path="/ascendancy" element={<AscendancySystem />} />
            <Route path="/passive-tree" element={<PassiveTree />} />
            <Route path="/atlas-tree" element={<AtlasTree />} />
            <Route path="/atlas-basics" element={<AtlasBasics />} />
            <Route path="/story" element={<StoryGuide />} />
            <Route path="/patch-notes" element={<PatchNotes />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                2024 POE2 Wiki - 
              </p>
              <div className="mt-4 md:mt-0">
                <a href="https://github.com/your-repo" className="text-gray-400 hover:text-white text-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
