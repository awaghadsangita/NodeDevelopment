let numberArray=[];

for(let i=0;i<10;i++){
	numberArray[i]=Math.floor(Math.random()*1000);
}
minimum=numberArray[0];
maximum=numberArray[0];
for(let i=0;i<10;i++){
	for(let j=0;j<10-i;j++){
		if(numberArray[j]>numberArray[j+1]){	
			let temp=numberArray[j];
			numberArray[j]=numberArray[j+1];
			numberArray[j+1]=temp;
		}
	}
}

console.log("Minimum number : "+numberArray[0]);
console.log("Maximum number : "+numberArray[numberArray.length-1]);

