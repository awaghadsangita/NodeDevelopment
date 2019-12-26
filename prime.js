let input =require("readline-sync");
let range=input.questionInt("Enter the Number");
itr=0;
let numbers=new Array();
for(let i=1;i<=range;i++){
	isPrime=true;
	for(let j=2;j<i;j++){
		if(i%j==0){
			isPrime=false;
			break;
		}
	}	
	if(isPrime==true){
		numbers[itr++]=i;
	}
}


