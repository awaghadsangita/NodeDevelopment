let read = require('readline-sync');

try{
	console.log(" 1.Celsius to Fahrenheit :\n 2.Fahrenheit to Celsius : ")
	let choice= read.questionInt("\nEnter your choice :");
	switch(choice){
		case 1: {
			let celsius = read.question("Enter The temperature : ");
			let result = convertToF(celsius);
			if (result instanceof Error){
				throw result.getMessage();
			}
			console.log("Celsius to Fahrenheit converstion : ",result);
			break;
		}
		case 2:{
			let fahrenheit= read.question("Enter The temperature : ");
			let result = convertToT(fahrenheit);
			if(result instanceof Error){
				throw result.getMessage();
			}
			console.log("Fahrenheit to Celsius converstion : ",result);
			break;
		}
		default:
			console.log("Invalid Input");
	}
}catch(e){
	console.log(e)
}

function convertToF(celsius){
	if(celsius<0 || celsius>100){
		throw new Error("temperature in invalid Range");
	}
	
	let fahrenheit;
	return  fahrenheit = (celsius * (9 / 5)) + 32;
}

function convertToT(fahrenheit) {
	if(fahrenheit<32 || fahrenheit>212 ){
		throw new Error("temperature in invalid range");
	}
	
	let celsius;
	return celsius = (fahrenheit - 32) * 5 / 9;
}
