let input=require("readline-sync");
let left=0;
let right=100;

while(true){
	let mid=parseInt((left+right)/2);
	let reply=input.questionInt("your magic number is "+mid+" if yes press 1 else 0 :");
	if(reply==1){
		console.log("your magic number is "+mid);
		break;
	}
	if(reply==0){
	let isGreater=input.questionInt("your magic number is greater than "+mid+ "if yes press 1 else 0 :");
		if(isGreater==1){
			left=mid+1;
		}
		if(isGreater==0){
			right=mid-1;
		}
	}
}
