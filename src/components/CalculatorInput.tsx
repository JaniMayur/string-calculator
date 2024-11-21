import React from "react";

const CalculatorInput = ({
  value,
  onChange,
  onSubmit,
  error,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  error: string | null;
}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()} // Allow 'Enter' key to trigger calculation
        className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl ${
          error ? "border-red-500 text-red-700" : "border-gray-300 text-black"
        }`}
        placeholder="Enter numbers (e.g., 1,2,3)"
        aria-label="Input numbers for calculation"
      />
    </div>
  );
};

export default CalculatorInput;
