let numberArray=[];
for(let i=0; i<process.argv.length-2; i++) { 
	for (let j=i+1; j<process.argv.length-1; j++){ 
		for (let k=j+1; k<process.argv.length; k++) { 
			if (parseInt(process.argv[i])+parseInt(process.argv[j])+parseInt(process.argv[k]) == 0){ 
				console.log(process.argv[i]+"+"+process.argv[j]+"+"+process.argv[k]+"= 0");
			} 
		} 
	} 
} 
