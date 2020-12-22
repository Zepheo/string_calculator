const expressionRegex = /^-?\d+(\s[+-/*]\s-?\d+)+$/;

export const calculate = (expression: string): number => {
  if (!expressionRegex.test(expression)) throw new Error('Argument must have shape "(num) (operator) (num)"');

  const splitExpression = expression.split(' ');

  const numbers = splitExpression.filter((char) => !Number.isNaN(Number(char)))
    .map((n) => Number(n));

  const operators = splitExpression.filter((char) => Number.isNaN(Number(char)));

  while (operators.includes('*') || operators.includes('/')) {
    const indexOfMultOrDiv = operators.findIndex((op) => op === '*' || op === '/');
    const operator = operators.splice(indexOfMultOrDiv, 1)[0];
    const leftNumber = numbers.splice(indexOfMultOrDiv, 1)[0];
    const rightNumber = numbers.splice(indexOfMultOrDiv, 1)[0];

    const result = operator === '*' ? leftNumber * rightNumber : leftNumber / rightNumber;
    numbers.splice(indexOfMultOrDiv, 0, result);
  }

  while (operators.length > 0) {
    const leftNumber = numbers.shift() as number;
    const rightNumber = numbers.shift() as number;
    const operator = operators.shift();

    let result: number;

    if (operator === '+') result = leftNumber + rightNumber;
    else result = leftNumber - rightNumber;
    numbers.unshift(result);
  }

  return numbers[0];
};

export const evalCalculate = (expression: string): number => {
  if (!expressionRegex.test(expression)) throw new Error('Argument must have shape "(num) (operator) (num)"');

  return eval(expression);
};
