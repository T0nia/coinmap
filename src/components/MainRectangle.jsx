
import React from 'react';

const MainRectangle = () => {
  return (
    <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]">
      {/* Heading above the rectangle */}
      <div className="absolute -top-9 left-1/2 transform -translate-x-1/2">
        <h1 className="text-black text-2xl font-mono">Coinmap Currrency Converter</h1>
      </div>

      {/* The rectangle itself */}
      <div className="w-full h-full bg-blue-600 border border-[#F8EDED]" />
    </div>
  );
};

export default MainRectangle;
