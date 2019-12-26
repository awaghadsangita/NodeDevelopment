let input=require("readline-sync")
let dayInNumber=input.questionInt("Enter weekday in Number");

switch(dayInNumber){
	case 1:	
		dayInWords="SUNDAY";
		break;
	case 2:
		dayInWords="MONDAY";
		break;
	case 3:	
		dayInWords="THUESDAY"
		break;
	case 4:
		dayInWords="WEDNESDAY";
		break;
	case 5:
		dayInWords="THURSDAY";
		break;
	case 6:
		dayInWords="FRIDAY";
		break;
	case 7:
		dayInWords="SATURDAY";
		break;
	default:
	console.log("Invalid day number");
}



