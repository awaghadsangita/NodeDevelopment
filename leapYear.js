var readLine = require('readline-sync');
let year=readLine.questionInt("Enter the year");

if(year>=1000 && year<10000){
	if(year%4==0){
		if(year%100==0){
			if(year%400==0){
				leap=true;
			}else{
				leap=false;
			}
		}else{
			leap=true;
		}
	}else{
		leap=false;
	}
}else{
	leap=false;
}

