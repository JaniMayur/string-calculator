import { useState } from "react";
import { add } from "./utils/add";
import CalculatorButton from "./components/CalculatorButton";
import CalculatorInput from "./components/CalculatorInput";
import CalculatorResult from "./components/CalculatorResult";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setError(null);
      setResult(add(input));
    } catch (e: any) {
      setError(e.message);
      setResult(0);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl h-[50px] font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 animate-pulse">
          String Calculator
        </h1>
        <CalculatorInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSubmit={handleCalculate}
          error={error}
        />
        <CalculatorButton onClick={handleCalculate} />
        <CalculatorResult result={result} error={error} />
      </div>
    </div>
  );
}

export default App;
