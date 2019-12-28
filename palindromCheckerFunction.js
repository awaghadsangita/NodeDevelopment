let read = require('readline-sync');
let num1 =read.questionInt("Enter First Number :");
let num2=read.questionInt("Enter Second Number :");

let isPalindrom1=checkpalindrome(num1);
let isPalindrom2=checkpalindrom(num2);	
if(isPalindrom1==true && isPalindrom2==true){
	if(num1==num2){
		console.log(num1+" and "+num2+" are palindrom");
	}
}else{
	console.log(num1+" and  "+num2+" are not palindrom");
}


function checkpalindrome(num1,num2){
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
