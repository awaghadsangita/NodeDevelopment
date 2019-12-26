let  valueOfN=parseInt(process.argv[2]);
power=1;
for(let i=0;i<=valueOfN;i++){
	console.log("2^"+i+"="+power);
	power=power*2;
}
