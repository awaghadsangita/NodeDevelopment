let die=Math.floor(Math.random()*10)%6+1;
let dieRollResultDictionary=new Map();
let max=0;
let dieRolledMax;
let dieRolledMin;

for(let i=1;i<=6;i++)
{
	dieRollResultDictionary.set(i,0);
}

for(let i=0;i!=null;i++){
	die=Math.floor(Math.random()*10)%6+1;
	dieRollResultDictionary.set(die,dieRollResultDictionary.get(die)+1);
	for(let j=1;j<=6;j++)
	{
		if(dieRollResultDictionary.get(j)>max)
		{
			max=dieRollResultDictionary.get(j);
		}
	}
	if(max>10)
	break;
}

maximum=dieRollResultDictionary.get(1);
minimum=dieRollResultDictionary.get(1);

for(let i=1;i<=6;i++){
	if(maximum<dieRollResultDictionary.get(i)){
		maximum=dieRollResultDictionary.get(i);
		dieRolledMax=i;
	}
	if(minimum>dieRollResultDictionary.get(i)){
		minimum=dieRollResultDictionary.get(i);
		dieRolledMin=i;
	}
}

console.log("Max "+dieRolledMax+" "+maximum);
console.log("Min "+dieRolledMin+" "+minimum);
