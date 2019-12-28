let numberArray=[];

for(let i=0;i<10;i++){
	numberArray[i]=Math.floor(Math.random()*1000);
}
minimum=numberArray[0];
maximum=numberArray[0];
for(let i=0;i<10;i++){
	if(maximum<numberArray[i])
		maximum=numberArray[i];
	if(minimum>numberArray[i])
		minimum=numberArray[i];
}
console.log("Minimum number : "+minimum);
console.log("Maximum number : "+maximum);

