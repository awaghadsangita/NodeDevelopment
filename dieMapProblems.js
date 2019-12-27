let die=Math.floor(Math.random()*10)%6+1;
let dieRollResultDictionary={};
let max;
let dieRolledMax;
let dieRolledMin;

for(let i=1;i<=6;i++)
{
	dieRollResultDictionary[i]=0;
}

for(let i=0;i!=null;i++){
	die=Math.floor(Math.random()*10)%6+1;
	dieRollResultDictionary[die]=dieRollResultDictionary[die]+1;
	for(let j=1;j<=6;j++)
	{
		if(dieRollResultDictionary[j]>max)
		{
			max=dieRollResultDictionary[j];
		}
	}
	if(max>10)
	break;
}

maximum=dieRollResultDictionary[1];
minimum=dieRollResultDictionary[1];

for(let i=1;i<=6;i++){
	if(maximum<dieRollResultDictionary[i]){
		maximum=dieRollResultDictionary[i];
		dieRolledMax=i;
	}
	if(minimum>dieRollResultDictionary[i]){
		minimum=dieRollResultDictionary[i];
		dieRolledMin=i;
	}
}


