import React from 'react'
import TypeIt from "typeit-react";


const TypingAnimation = () => {
  return (
    <span className="text-2xl font-bold">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["Designer", "Developer"],
          breakLines: false,
        }}
      />
    </span>
  );
};

export default TypingAnimation