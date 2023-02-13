//Text Used: Lana Del Rey - happiness is a butterfly

let myText;
let spacing = 50;
let y = 120;
let x = 10;
let lines = [];
let a = 10;
let b = 10;

function preload() {
	myText = loadStrings("butterfly.txt");
}

function setup() {
	createCanvas(900, 900);
	background(73, 41, 87);
	frameRate(30);

	
	for (let i = 0; i < myText.length; i++) {
		textFont('helvatica');
		textSize(25);
		//textStyle(BOLD);
		text(myText[i], x, y);
		x = 10;
		y += spacing;
	}
} 


function draw() {
	let die = 'happiness is a butterfly';
	
	let c1 = map(mouseX, 0, 900, 100, 190);
	let c2 = map(mouseX, 0, 900, 100, 190);


	fill(215, c1, c2);
	textFont('helvatica');
	text(die, a, b);
	b += spacing;
	if (b >= height) {
		b = 10;
		a += 370;
	}
	if (a = b) {
		fill(117,121,249);
		text(die, random(width), random(height));
	}
}