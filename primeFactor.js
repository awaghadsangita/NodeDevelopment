let number=parseInt(process.argv[2]);

for(i=1;number%2==0;number=number/2){
	console.log(2+" ");
}

for(let i=3;i*i<number;i++){
	while(number%i==0){
		console.log(i+" ");
		number=number/i;
	}
}
if(number>2){
	console.log(number+" ");
}
