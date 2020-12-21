const operationRegex = /^-?\d+(\s[+-/*]\s-?\d+)+$/;

export const calculator = (operation: string): number => {
  if (!operationRegex.test(operation)) throw new Error('Argument must have shape "(num) (operator) (num)"');

  const operations = operation.split(' ');

  const numbers = operations.filter((char) => !Number.isNaN(Number(char)))
    .map((n) => Number(n));

  const operators = operations.filter((char) => Number.isNaN(Number(char)));

  while (operators.includes('*') || operators.includes('/')) {
    const indexOfMultOrDiv = operators.findIndex((op) => op === '*' || op === '/');
    const operator = operators.splice(indexOfMultOrDiv, 1)[0];
    const firstNumber = numbers.splice(indexOfMultOrDiv, 1)[0];
    const secondNumber = numbers.splice(indexOfMultOrDiv, 1)[0];

    const result = operator === '*' ? firstNumber * secondNumber : firstNumber / secondNumber;
    numbers.splice(indexOfMultOrDiv, 0, result);
  }

  while (operators.length > 0) {
    const firstNumber = numbers.shift() as number;
    const secondNumber = numbers.shift() as number;
    const operator = operators.shift();

    let result: number;

    if (operator === '+') result = firstNumber + secondNumber;
    else result = firstNumber - secondNumber;
    numbers.unshift(result);
  }

  return numbers[0];
};

export const evalCalculator = (operation: string): number => {
  if (!operationRegex.test(operation)) throw new Error('Argument must have shape "(num) (operator) (num)"');

  return eval(operation);
};
