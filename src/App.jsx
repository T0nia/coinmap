import React from 'react';
import MainRectangle from './components/MainRectangle';

const App = () => {
  return (
    <div className="relative h-screen">
      {/* Heading absolutely positioned to overlap the panel */}
      <h1 className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-2xl text-black">
        Coinmap Currency Converter
      </h1>

      {/* Main Rectangle Panel */}
      <MainRectangle />
    </div>
  );
};

export default App;
