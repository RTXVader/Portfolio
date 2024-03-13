import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 id="about" className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Alex
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Junior Software Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Enthusiastic and dedicated Junior Software Developer with a background
        in architecture. Passionate about combining technical skills with
        creative problem-solving to deliver outstanding results. Currently
        pursuing a career transition into software development after gaining
        valuable experience at Northcoders.
      </p>
    </div>
  );
}

export default Intro;
