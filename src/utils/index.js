export const calculation = (calcArray, currentResult) => {
  // console.log(calcArray, "calcArray");
  // console.log(currentResult, "currentResult");

  if (isNaN(calcArray[calcArray.length - 1])) {
    return currentResult;
  }

  const operatorFunctions = {
    "+": (a, b) => {
      return a + b;
    },
    "-": (a, b) => {
      return a - b;
    },
    "*": (a, b) => {
      return a * b;
    },
    "/": (a, b) => {
      return a / b;
    },
  };

  let calcString = calcArray.join("");
  // console.log(calcString, "calcString");

  let calcArrayUpdated = calcString.split(/(\+|-|\*|\/)/g);
  // console.log(calcArrayUpdated, "calcArrayUpdated");
  let result = 0;

  let operator = "+";

  for (let i = 0; i < calcArrayUpdated.length; i++) {
    let item = calcArrayUpdated[i];
    // console.log(item, "item");
    let isOperator = /(\+|-|\*|\/)/.test(item);
    // console.log(isOperator, "isOperator");
    if (isOperator) {
      operator = item;
    } else {
      result = operatorFunctions[operator](result, parseInt(item));
      // console.log(result, "result");
    }
  }

  return result;
};

export const addValueToCalculation = (value, currentState) => {
  console.log(value, "value");
  console.log(currentState, "currentState");

  currentState = [...currentState];

  let operatorValues = ["*", "/", "+", "-"];

  if (typeof value !== "number" && !operatorValues.includes(value)) {
    return currentState;
  }

  if (operatorValues.includes(value) && !currentState.length) {
    return currentState;
  }

  let lastVal = currentState[currentState.length - 1];
  // console.log(lastVal, "lastVal");

  let lastValIsOperator = operatorValues.includes(lastVal);
  // console.log(lastValIsOperator, "lastValIsOperator");

  let currentValIsOperator = operatorValues.includes(value);
  // console.log(currentValIsOperator, "currentValIsOperator");

  if (lastValIsOperator && currentValIsOperator) {
    currentState[currentState.length - 1] = value;

    return currentState;
  }

  return [...currentState, value];
};
