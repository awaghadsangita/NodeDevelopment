let readLine=require("readline-sync");
let number=readLine.questionInt("Enter the Single Digit Number");

if(number<10){
	switch(number){
		case 0:{
			numberInWords="Zero";
			break;
		}
		case 1:{
			numberInWords="One";
			break;
		}
		case 2:{
			numberInWords="Two";
			break;
		}
		case 3:{
			numberInWords="Three";
			break;
		}
		case 4:{
			numberInWords="Four";
			break;
		}
		case 5:{
			numberInWords="Five";
			break;
		}
		case 6:{
			numberInWords="Six";
			break;
		}
		case 7:{
			numberInWords="Seven";
			break;
		}
		case 8:{
			numberInWords="Eight";
			break;
		}
		case 9:{
			numberInWords="Nine";
			break;
		}
		default:
		console.log("Invalid number range");
	}
}else{
	console.log("Not single digit");
}

