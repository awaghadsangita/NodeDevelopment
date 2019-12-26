let input=require("readline-sync");
let number=input.question("Enter the Number to calculate factorial");
factorial=1;

for(let i=1;i<=number;i++){
	factorial*=i;
}

