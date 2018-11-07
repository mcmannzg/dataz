console.log('Calculator Loaded');

// Risk Calculator
console.log('RISK CALCULATOR');

let purchaseCost = 0;

let itemOneValue = 0;
let itemOneProbability = 0;

let itemTwoValue = 0;
let itemTwoProbability = 0;

let itemThreeValue = 0;
let itemThreeProbability = 0;

let expectedValue = (itemOneValue * itemOneProbability) + (itemTwoValue * itemTwoProbability) + (itemThreeValue * itemThreeProbability);

console.log(`The expected value is ${expectedValue}`);

let expectedGain = expectedValue - purchaseCost;

console.log(`The expected gain is ${expectedGain}`);
console.log(`The fair price is ${expectedValue}`);

if (expectedGain < 0) {
	console.log('Not worth it');
} else {
	console.log('Worth it');
}

console.log('WEIGHTED AVERAGE');

let numberOne = 0;
let oneProb = 0;

let numberTwo = 0;
let twoProb = 0;

let numberThree = 0;
let threeProb = 0;

let average = (numberOne * oneProb) + (numberTwo * twoProb) + (numberThree * threeProb);

console.log(`The average is ${average}`);