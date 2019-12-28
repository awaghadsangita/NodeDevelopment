let repeatedDigitArray=new Array();

for(let i=1;i<100;i++){
	reminderDigit=i%10;
	digitAfterDivision=parseInt(i/10);
	if(reminderDigit==digitAfterDivision){
		repeatedDigitArray.push(i);
	}
}

for(let i=1;i<repeatedDigitArray.length;i++){
	console.log(repeatedDigitArray[i]);
}
