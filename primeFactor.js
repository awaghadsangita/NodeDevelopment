let number=parseInt(process.argv[2]);
let primeFactorArray=[];
for(i=1;number%2==0;number=number/2){
	primeFactorArray.push(2)
}

for(let i=3;i*i<number;i++){
	while(number%i==0){
		primeFactorArray.push(i);
		number=number/i;
	}
}
if(number>2){
	primeFactorArray.push(number);
}

for(let i=0;i<primeFactorArray.length;i++){
	console.log(primeFactorArray[i]);
}
