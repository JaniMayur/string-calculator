// src/utils/add.ts

export function add(numbers: string): number {
  if (numbers === "") return 0;

  const customDelimiterMatch = numbers.match(/^\/\/(.)\n/);
  if (customDelimiterMatch) {
    const delimiter = customDelimiterMatch[1];
    numbers = numbers.slice(customDelimiterMatch[0].length);
    return sumNumbers(numbers.split(delimiter));
  }

  // Handle new lines between numbers
  numbers = numbers.replace(/\n/g, ",");

  // Split the numbers by commas
  return sumNumbers(numbers.split(","));
}

function sumNumbers(numbers: string[]): number {
  let sum = 0;
  const negativeNumbers: string[] = [];

  numbers.forEach((num) => {
    const n = parseInt(num, 10);

    if (isNaN(n)) return;

    if (n < 0) {
      negativeNumbers.push(num);
    } else {
      sum += n;
    }
  });

  if (negativeNumbers.length) {
    throw new Error(
      "Negative numbers not allowed: " + negativeNumbers.join(", ")
    );
  }

  return sum;
}
