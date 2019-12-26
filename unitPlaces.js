let input=require("readline-sync");
let number=input.questionInt("Enter the number");

if(number==1){
	numberInWord="unit";
}else if(number==10){
	numberInWord="ten";
}else if(number==100){
	numberInWord="hundred"
}else if(number==1000){
	numberInWord="Thousand"
}
