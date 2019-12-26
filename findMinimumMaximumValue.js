let numberOne=Math.floor(Math.random()*100)+100;
let numberTwo=Math.floor(Math.random()*100)+100;
let numberThree=Math.floor(Math.random()*100)+100;
let numberFour=Math.floor(Math.random()*100)+100;
let numberFive=Math.floor(Math.random()*100)+100;

console.log("1st Number:",numberOne); 
console.log("2nd Number:",numberTwo);
console.log("3rd Number:",numberThree);
console.log("4th Number:",numberFour);
console.log("5th Number:",numberFive);
max=numberOne;
min=numberOne;

if(numberTwo>max)
	max=numberTwo;
if(numberThree>max)
	max=numberThree;
if(numberFour>max)
	max=numberFour
if(numberFive>max)
	max=numberFive;
	
if(numberTwo<min)
	min=numberTwo;
if(numberThree<min)
	min=numberThree;
if(numberFour<min)
	min=numberFour;
if(numberFive<min)
	min=numberFive;

console.log("Maximum value:",max);
console.log("Minium value:",min);
