let input=require("readline-sync");
let givenLength=input.questionInt("Enter the Length");
let givenUnit=input.question("Enter the Unit");
let convertTo=input.question("in which unit you want to convert");

conversionUnit=givenUnit.toUpperCase()+"_TO_"+convertTo.toUpperCase();

switch(conversionUnit){
	case "FEET_TO_INCH":{
		afterConversion=givenLength*0.0833333;
		break;
	}
	case "INCH_TO_FEET":{
		afterConversion=givenLength*12;
		break;
	}
	case "FEET_TO_METER":{
		afterConversion=givenLength*3.28084;
		break;
	}
	case "METER_TO_FEET":{
		afterConversion=givenLength*0.3048;
	}
	defualt:
		console.log("Invalid conversion units");
}

