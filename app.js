console.log('JavaScript Loaded');

let date = new Date();
let currentDate = date.getHours();

console.log(currentDate);

function myFunction() {
	if (currentDate <= 11){
		document.getElementById('greeting').innerHTML = 'Good Morning';
	} else if (currentDate >= 17) {
		document.getElementById('greeting').innerHTML = 'Good Evening';
	} else {
		document.getElementById('greeting').innerHTML = 'Good Afternoon';
	}
}