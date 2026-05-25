import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Services } from './pages/Services';
import { Collabs } from './pages/Collabs';
import { Agenda } from './pages/Agenda';

import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/collaborations" element={<Collabs />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
