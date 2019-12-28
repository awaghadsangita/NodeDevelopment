let read = require('readline-sync');
let num1 =read.questionInt("Enter First Number :");

let isPrime=checkPrime(num1);

if(isPrime){
	let isPalindrom1=checkPalindrom(num1);
	if(isPalindrom1){
		console.log(num1 +"is Prime and Palindrom");
	}else{
		console.log(num1 +"is Prime but not Palindrom");
	}
}else{
	let isPalindrom=checkPalindrom(num1);
	if(isPalindrom){
		console.log(num1 +"is Palindrom but is not palindrom");
	}else{
		console.log(num1 +"is not Prime and not Palindrom");
	}
	
}	

function checkPrime(num){
	let isPrime=true;
	for(let i=2;i<num;i++)
	{	
		if(num%i==0){
			isPrime==false;
		}
	}
	return isPrime;
}
function checkpalindrome(num1){
	let rem,temp,reverse=0;
	temp=number;
	while(number>0){
		rem=number%10;
		reverse=reverse*10+rem;
		number=parseInt(number/10);
	}
	if (reverse == temp){
        	console.log("Number is Palindrome");
		return true;
	}
	else{
		console.log("Number is not Palindrome");
		return false;
	}
}
