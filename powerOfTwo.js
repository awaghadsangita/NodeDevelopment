let input=require("readline-sync");
let  valueOfN=input.questionInt("Enter the value of n (2^n)");
power=1;
for(let i=0;i<=valueOfN;i++){
	console.log("2^"+i+"="+power);
	power=power*2;
}
