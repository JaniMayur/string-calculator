// CalculatorResult Component
const CalculatorResult = ({
  result,
  error,
}: {
  result: number | string;
  error: string | null;
}) => {
  return (
    <div className="mt-4">
      {error ? (
        <p className="text-red-600 text-lg font-semibold">{error}</p>
      ) : (
        <p className="text-green-600 text-xl font-semibold">Result: {result}</p>
      )}
    </div>
  );
};

export default CalculatorResult;
