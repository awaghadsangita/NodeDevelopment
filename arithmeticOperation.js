let input=require("readline-sync")
let a=input.questionInt("Enter value of a: ");
let b=input.questionInt("Enter value of b: ");
let c=input.questionInt("Enter value of c: ");

operation1=a + b * c;
operation2=c + a / b;
operation3=a % b + c;
operation4=a * b + c;

max=operation1;
min=operation1;

if(operation1>operation2 && operation1>operation3 && operation1>operation4){
	max=operation1
}else if(operation2>operation1 && operation2>operation3 && operation2>operation4){
	max=operation2
}else if(operation3>operation1 && operation3>operation2 && operation3>operation4){
	max=operation3;
}else{
	max=operation4;
}

if(operation1<operation2 && operation1<operation3 && operation1<operation4){
	min=operation1
}else if(operation2<operation1 && operation2<operation3 && operation2<operation4){
	min=operation2
}else if(operation3<operation1 && operation3<operation2 && operation3<operation4){
	min=operation3;
}else{
	min=operation4;
}
