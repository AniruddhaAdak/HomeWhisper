import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Devices from './pages/Devices';
import Scenes from './pages/Scenes';
import Security from './pages/Security';
import Energy from './pages/Energy';
import VoiceControl from './pages/VoiceControl';
import Gestures from './pages/Gestures';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import About from './pages/About';
import Features from './pages/Features';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/scenes" element={<Scenes />} />
            <Route path="/security" element={<Security />} />
            <Route path="/energy" element={<Energy />} />
            <Route path="/voice" element={<VoiceControl />} />
            <Route path="/gestures" element={<Gestures />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/features" element={<Features />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;