let readLine=require("readline-sync");
let number=readLine.questionInt("Enter the Single Digit Number");
if(number<10){
	if(number==0){
		numberInWords="Zero";
	}else if(number==1){
		numberInWords="One";
	}else if(number==2){
		numberInWords="Two";
	}else if(number==3){
		numberInWords="Three";
	}else if(number==4){
		numberInWords="Four";
	}else if(number==5){
		numberInWords="Five";
	}else if(number==6){
		numberInWords="Six";
	}else if(number==7){
		numberInWords="Seven";
	}else if(number==8){
		numberInWords="Eight";
	}else if(number==9){
		numberInWords="Nine";
	}
}else{
	console.log("Not single digit");
}

