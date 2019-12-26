let input =require("readline-sync");
let number=input.questionInt("Enter the Number");
isPrime=true;
for(let i=2;i<parseInt(number/2);i++)
{
	if(number%i==0){
		isPrime=false;
		break;
	}
}
