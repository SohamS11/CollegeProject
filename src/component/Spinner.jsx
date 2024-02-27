import React from "react";

const Spinner = () => {
  return (
    <div className=" flex  flex-col space-y-4 h-screen justify-center items-center">
      <div className="Spinner"></div>
      <p className="text-gray-500">Loading...</p>
    </div>
  );
};

export default Spinner;
