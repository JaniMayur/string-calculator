import React from "react";

const CalculatorButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="mb-6">
      <button
        onClick={onClick}
        className="w-full py-4  bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md shadow-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 transition duration-300"
        aria-label="Calculate the sum"
      >
        Calculate
      </button>
    </div>
  );
};

export default CalculatorButton;
