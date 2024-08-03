import React from "react";

const BusinessCounter = () => {
  return (
    <div className="w-full bg-my-gradient sm:py-12 py-4 sm:px-4  flex justify-center items-center">
      <div className="container lg:w-[90%] w-full flex justify-between items-center">
        <div className="text-white w-full border-r-2 border-white px-0.5">
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold text-center w-full">
            200+
          </h1>
          <p className="text-center lg:text-xl text-xs">
            Projects completed successfully
          </p>
        </div>
        <div className="text-white w-full border-r-2 border-white px-0.5">
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold text-center w-full">
            50+
          </h1>
          <p className="text-center lg:text-xl text-xs">
            Projects completed successfully
          </p>
        </div>
        <div className="text-white w-full px-0.5">
          <h1 className="lg:text-5xl sm:text-4xl text-2xl font-bold text-center w-full">
            1000+
          </h1>
          <p className="text-center lg:text-xl text-xs">
            Satisfied Clients Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCounter;
