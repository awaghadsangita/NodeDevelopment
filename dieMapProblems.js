
let dieRollResultMap=new Map();
let max=0;
let dieRolledMax;
let dieRolledMin;

for(let i=1;i<=6;i++)
{
	dieRollResultMap.set(i,0);
}

while(true){
	die=Math.floor(Math.random()*10)%6+1;
	dieRollResultMap.set(die,dieRollResultMap.get(die)+1);
	for(let j=1;j<=6;j++)
	{
		if(dieRollResultMap.get(j)>max)
		{
			max=dieRollResultMap.get(j);
		}
	}
	if(max>10)
	break;
}

maximum=dieRollResultMap.get(1);
minimum=dieRollResultMap.get(1);

for(let i=1;i<=6;i++){
	if(maximum<dieRollResultMap.get(i)){
		maximum=dieRollResultMap.get(i);
		dieRolledMax=i;
	}
	if(minimum>dieRollResultMap.get(i)){
		minimum=dieRollResultMap.get(i);
		dieRolledMin=i;
	}
}

console.log("Max "+dieRolledMax+" "+maximum);
console.log("Min "+dieRolledMin+" "+minimum);
