console.log('Game Loaded');

let playerChoice;
let computerChoice;

let computerWins = 0;
let playerWins = 0;

let rockNumber = 0;
let paperNumber = 0;
let scissorsNumber = 0;

function choseRock() {

	//playerChoice = rock;

	computerChoice = Math.random();

	if (computerChoice <= .33){
		console.log('Computer chose Rock, try again');

	} else if (computerChoice >= .66) {
		console.log('Computer chose Scissors, you win!');
		playerWins++;
		var winScreen = document.getElementById('result');
		winScreen.style.display = 'block';
		document.getElementById('playerwins').innerHTML = `Player Wins: ${playerWins}`;
	} else {
		console.log('Computer chose Paper, you lose.');
		computerWins++;
		document.getElementById('computerwins').innerHTML = `Computer Wins: ${computerWins}`;
	}

	rockNumber++;

	document.getElementById('rockcounter').innerHTML = `You have chosen rock ${rockNumber} times`;
}

function chosePaper() {
	//playerChoice = paper;

	computerChoice = Math.random();

	if (computerChoice <= .33){
		console.log('Computer chose Rock, you win!');
		playerWins++;
		var winScreen = document.getElementById('result');
		winScreen.style.display = 'block';
		document.getElementById('playerwins').innerHTML = `Player Wins: ${playerWins}`;
	} else if (computerChoice >= .66) {
		console.log('Computer chose Scissors, you lose.');
		computerWins++;
		document.getElementById('computerwins').innerHTML = `Computer Wins: ${computerWins}`;

	} else {
		console.log('Computer chose Paper, try again.');
	}

	paperNumber++;

	document.getElementById('papercounter').innerHTML = `You have chosen paper ${paperNumber} times`;
}

function choseScissors() {
	computerChoice = Math.random();

	if (computerChoice <= .33){
		console.log('Computer chose Rock, you lose.');
		computerWins++;
		document.getElementById('computerwins').innerHTML = `Computer Wins: ${computerWins}`;

	} else if (computerChoice >= .66) {
		console.log('Computer chose Scissors, try again.');
	} else {
		console.log('Computer chose Paper, you win!');
		playerWins++;
		var winScreen = document.getElementById('result');
		winScreen.style.display = 'block';
		document.getElementById('playerwins').innerHTML = `Player Wins: ${playerWins}`;
	}

	scissorsNumber++;

	document.getElementById('scissorscounter').innerHTML = `You have chosen scissors ${scissorsNumber} times`;
}
/*
document.getElementById('playerwins').innerHTML = playerWins;
document.getElementById('computerwins').innerHTML = computerWins;
*/
function reset() {
	var winScreen = document.getElementById('result');
	var choiceScreen = document.getElementById('choice');
	winScreen.style.display = 'none';
	choiceScreen.style.display = 'block';
	console.clear();
}