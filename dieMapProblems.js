let die=Math.floor(Math.random()*10)%6+1;
let repeatationNumber=Math.floor(Math.random()*10);
let dieRollResultDictionary={};

for(let i=0;i<repeatationNumber;i++){
	die=Math.floor(Math.random()*10)%6+1;
	dieRollResultDictionary[i]=die
}


