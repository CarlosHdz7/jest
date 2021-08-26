import React from 'react';
import './Home.scss';

const Home = () => (
  <>
    <h1 className="title">Welcome to Marvel</h1>
    <img
      className="home-banner"
      src="/images/banner.png"
      alt=""
    />
    <p className="home-description">
      The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe
      centered on a series of superhero films produced by Marvel Studios. The films are based
      on characters that appear in American comic books published by Marvel Comics. The franchise
      also includes television series, short films, digital series, and literature. The shared
      universe, much like the original Marvel Universe in comic books, was established by crossing
      over common plot elements, settings, cast, and characters.
    </p>
  </>
);

export default Home;
