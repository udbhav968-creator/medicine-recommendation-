import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Implementation from './pages/Implementation';
import AnalyticsPage from './pages/AnalyticsPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#02060f]">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
