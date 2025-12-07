import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white selection:bg-indigo-500 selection:text-white cursor-none">
        <MouseFollower />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
