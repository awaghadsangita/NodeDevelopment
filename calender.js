month=process.argv[2]
date=parseInt(process.argv[3]);

if(month=="march" && date>=20){
		result=true;
}else if(month=="april" || month=="may" && date>=1 && date<31){
		result=true;
}else if(month=="june" && date<=20){
		result=false;
}else{
	result=false;
}
console.log(result);
