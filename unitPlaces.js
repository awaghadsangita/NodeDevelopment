let input=require("readline-sync");
let number=input.questionInt("Enter the number");

switch(number){
	case 1:{
		numberInWord="unit";
		break;
	}
	case 10:{
		numberInWord="ten";
		break;
	}
	case 100:{
		numberInWord="hundred";
		break;
	}
	case 1000:{
		numberInWord="Thousand"
		break;
	}
	default:
		console.log("Invalid number")
}
