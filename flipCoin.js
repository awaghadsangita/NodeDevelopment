let HEAD=1;
let headCount=0;
let tailCount=0;
while(true){
	let coin=Math.floor(Math.random()*10)%2;
	if(coin==HEAD){
		headCount++;
	}else{
		tailCount++;
	}
	if(headCount==11 || tailCount==11){
		break;
	}
}

console.log("HEAD count :"+headCount);
console.log("TAIL count :"+tailCount);
