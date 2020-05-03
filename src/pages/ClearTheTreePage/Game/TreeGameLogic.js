const OPERATION_MAPPING = {
  0: "+",
  1: "-",
  2: "x",
}

class TreeGameLogic {
  constructor() {
    this.equations = [];
    this.isActive = false;
  }

  //resets game
  start() {
    this.equations = [];
    for(let i = 0; i < 3; i++) {
      this.push();
    }
    this.isActive = true;
  }

  //push new random equation into equations list
  push() {
    const operation = this.getRandomInt(0, 3);
    const values = this.getRandomValues(operation);
    const equation = new Equation(
      this.getRandomInt(0, 3),
      OPERATION_MAPPING[operation], 
      values
    );
    this.equations.push(equation);
  }

  //returns the equation as array of strings
  getOutput() {
    return this.equations.map(equation => equation.getUnsolved());
  }

  //checks submitted answer, removes Equation from equations if correct
  //returns true for right answer, false otherwise
  submit(input) {
    const equation = this.equations[0];
    if(equation.values[equation.unknownIndex] === input) {
      this.equations.splice(0, 1);
      return true;
    }
    return false;
  }

  //checks win condition, stops game if true
  win() {
    if(this.length() === 0) {
      this.isActive = false;
      return true;
    }
    return false;
  }

  //checks loss condition, stops game if true
  loss() {
    if(this.length() === 10) {
      this.isActive = false;
      return true;
    }
    return false;
  }

  length() {
    return this.equations.length;
  }

  getRandomValues(operation) {
    const v1 = this.getRandomInt(1, 10);
    const v2 = this.getRandomInt(1, 10);
    if(operation === 0) {
      return this.getRandomAddition(v1, v2);
    }
    else if(operation === 1) {
      return this.getRandomSubtraction(v1, v2);
    }
    else {
      return this.getRandomMultiplication(v1, v2);
    }
  }

  getRandomAddition(v1, v2) {
    return [v1, v2, v1 + v2];
  }

  getRandomSubtraction(v1, v2) {
    //this ensures no negatives
    return v1 < v2 ? [v2, v1, v2 - v1] : [v1, v2, v1-v2];
  }

  getRandomMultiplication(v1, v2) {
    return [v1, v2, v1 * v2];
  }

  //low is inclusive, high is exclusive
  getRandomInt(low, high) {
    return Math.floor(Math.random() * high) + low;
  }
}

class Equation {
  constructor(unknownIndex, operation, values) {
    this.unknownIndex = unknownIndex;
    this.operation = operation;
    this.values = values;
  }

  getUnsolved() {
    if(this.unsolved === undefined)
      this.unsolved = this.generateUnsolvedEquation();
    return this.unsolved;
  }

  getSolved(input) {
    return this.solved === undefined ? "something went wrong" 
      : this.unsolved.replace("__", input.toString());
  }

  generateUnsolvedEquation() {
    return `${this.unknownIndex == 0 ? "__" : this.values[0]} \
${this.operation} \
${this.unknownIndex == 1 ? "__" : this.values[1]} = \
${this.unknownIndex == 2 ? "__" : this.values[2]}`;
  }
}

export { TreeGameLogic, Equation, OPERATION_MAPPING };