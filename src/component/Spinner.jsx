import React from "react";

const Spinner = () => {
  return (
    <div className="w-[1300px] h-screen flex  flex-col space-y-4 justify-center items-center">
      <div className="Spinner"></div>
      <p className="text-gray-500">Loading...</p>
    </div>
  );
};

export default Spinner;
