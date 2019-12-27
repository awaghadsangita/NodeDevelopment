let  valueOfN=parseInt(process.argv[2]);
let power=1;
let i=0;
while(i!=valueOfN){
	console.log("2^"+(i++)+"="+power);
	power=power*2;

	if(i==256){
		break;
	}
}
