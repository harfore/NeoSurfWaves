import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Collab from './components/Collab';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/collaborations" element={<Collab />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
