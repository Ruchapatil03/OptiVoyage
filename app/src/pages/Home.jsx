import React from 'react';
import Hero from '../components/HomeHero';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div className="hero-container min-h-screen flex flex-col justify-center">
      <NavBar />
      <Hero />
    </div>
  );
}
