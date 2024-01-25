import React from 'react';
import Gallery from '../components/Gallery';
import { ProvideAppContext } from '../context/AppContext'; 

const Home = () => {
  return (
    <ProvideAppContext> 
      <div className="App">
        <h1>Natural Pic</h1>
        <Gallery />
      </div>
    </ProvideAppContext>
  );
};

export default Home;