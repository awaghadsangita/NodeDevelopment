let input=require("readline-sync")
let dayInNumber=input.questionInt("Enter weekday in Number");
if(dayInNumber==1){
	dayInWords="SUNDAY";
}else if(dayInNumber==2){
	dayInWords="MONDAY";
}else if(dayInNumber==3){
	dayInWords="THUESDAY"
}else if(dayInNumber==4){
	dayInWords="WEDNESDAY";
}else if(dayInNumber==5){
	dayInWords="THURSDAY";
}else if(dayInNumbers==6){
	dayInWords="FRIDAY";
}else if(dayInNumbers==7){
	dayInWords="SATURDAY";
}else{
	console.log("Invalid day number");
}



