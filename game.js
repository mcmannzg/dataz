console.log('Game Loaded');

let shield = Math.ceil(Math.random() * 1);
let sword = 5;
let bow = Math.ceil(Math.random() * 4); 

let shieldDefense = Math.ceil(Math.random() * 3);
let swordDefense = 1;
let bowDefense = 0;

let dragon = 30;
let cyclopsHealth = 15;
/*
let cyclopsDefense = Math.ceil(Math.random() * 2);
*/
let playerWeapon;
let playerHealth = 10;
let playerDefense;
let playerWallet;
/*
function testDamage() {
	let swordDamage = Math.ceil(Math.random() * 5);
	console.log(swordDamage);
}
*/
function chooseWeapon() {
	var weaponChoice = document.getElementById('weaponchoice');

	weaponChoice.style.display = 'block';

	var intro = document.getElementById('intro');

	intro.style.display = 'none';

	console.log('Player is choosing weapon');
}

function debug() {
	console.log(`Player Weapon: ${playerWeapon}`);
	console.log(`Dragon Health: ${dragon}`);
	console.log(`Cyclops Health: ${cyclopsHealth}`);
	//console.log(`Cyclops Defense: ${cyclopsDefense}`);
	console.log(`Player Defense: ${playerDefense}`);
	console.log(`Player Health: ${playerHealth}`);
}


function weaponShield() {
	playerWeapon = shield;
	playerDefense = shieldDefense;
	console.log('The player has chosen the shield');
	alert('The shield has been chosen');
}

function weaponSword() {
	playerWeapon = sword;
	playerDefense = swordDefense;
	console.log('The player has chosen the sword');
	alert('The sword has been chosen');
}

function weaponBow() {
	playerWeapon = bow;
	playerDefense = bowDefense;
	console.log('The player has chosen the bow');
	alert('The bow has been chosen');
}

function begin() {
	var weaponChoice = document.getElementById('weaponchoice');

	weaponChoice.style.display = 'none';

	var enemySelection = document.getElementById('choose-enemy');

	enemySelection.style.display = 'block';

	console.log('The player is choosing a battle...');
}

function fightDragon() {
	var enemySelection = document.getElementById('choose-enemy');

	enemySelection.style.display = 'none';

	var fightDragon = document.getElementById('dragon-fight');

	fightDragon.style.display = 'block';

	console.log('The player has chosen to fight the dragon');
}

function fightCyclops() {
	var enemySelection = document.getElementById('choose-enemy');

	enemySelection.style.display = 'none';

	var fightCyclops = document.getElementById('cyclops-fight');

	fightCyclops.style.display = 'block';
}

function dealDamageDragon() {
	dragon -= playerWeapon;
	console.log(`The dragon has ${dragon} health remaining`);
	document.getElementById('healthbar').innerHTML = `Dragon Health: ${dragon}`;
	if (dragon <= 0){
		var fightDragon = document.getElementById('dragon-fight');

		fightDragon.style.display = 'none';

		var finish = document.getElementById('finish');

		finish.style.display = 'block'

		console.log('The dragon has been defeated');

		if (playerHealth >= 10){
			document.getElementById('perfectgame').innerHTML = `Perfect Game! You defeated the dragon, and still had ${playerHealth} health left!`;
		}
	}

	let dragonDamage = Math.ceil(Math.random() * 5) - playerDefense;

	playerHealth -= dragonDamage;

	alert(`The dragon dealt ${dragonDamage} damage to you! Your weapon defended you from ${playerDefense} damage!`);
	console.log(`The dragon dealt ${dragonDamage} damage!`);

	alert(`You dealt ${playerWeapon} damage to the dragon!`);

	console.log(`The player has ${playerHealth} health remaining`);
	if (playerHealth <= 0){
		var fight = document.getElementById('dragon-fight');

		fight.style.display = 'none';

		var losingScreen = document.getElementById('losingscreen');

		losingScreen.style.display = 'block';

		console.log('The player was defeated');
	}
	document.getElementById('playerhealth').innerHTML = `Your Health: ${playerHealth}`;
}

function dealDamageCyclops() {
	// Damage done to the cyclops
	cyclopsHealth -= playerWeapon * Math.ceil(Math.random() * 5);
	// - cyclopsDefense;

	let cyclopsDamage = Math.ceil(Math.random() * 8) - playerDefense;
	console.log(`Cyclops Number = ${cyclopsDamage}`);
	//console.log(`Cyclops Defense Number = ${cyclopsDefense}`);
	console.log(`Player Number = ${playerWeapon}`);
	// Damage done to the player
	playerHealth -= cyclopsDamage;

	console.log(`The player did ${playerWeapon/* - cyclopsDefense*/} damage to the cyclops!`);
	console.log(`The cyclops did ${cyclopsDamage} damage to the player!`);

	if (cyclopsHealth <= 0){
		// Code below makes the winning screen appear, and the fight screen disappear
		var finish = document.getElementById('finish');

		finish.style.display = 'block';

		var fightCyclops = document.getElementById('cyclops-fight');

		fightCyclops.style.display = 'none';

		console.log('The player has defeated the cyclops');

		// Add in coins and xp earned here
	}

	if (playerHealth <= 0){
		// Code below makes the losing screen appear
		var losingScreen = document.getElementById('losingscreen');

		losingScreen.style.display = 'block';

		var fightCyclops = document.getElementById('cyclops-fight');

		fightCyclops.style.display = 'none';

		console.log('The player has been defeated');
	}

	console.log(`The player has ${playerHealth} health remaining`);
	console.log(`The cyclops has ${cyclopsHealth} health remaining`);
}

function restartGame() {
	var finish = document.getElementById('finish');

	finish.style.display = 'none';

	var losingScreen = document.getElementById('losingscreen');

	losingScreen.style.display = 'none';

	var intro = document.getElementById('intro');

	intro.style.display = 'block';

	playerHealth = 10;
	playerDefense = undefined;
	playerWeapon = undefined;
	dragon = 10;

	console.clear();

	console.log('The game has restarted');
}