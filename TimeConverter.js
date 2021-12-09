/**
 * 
 */
 
 function convertTimeToWords(hours, minutes){
	let wholeHour = 60;
	let nextHour = hours + 1;
	
	let hMCount = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", 
	"twelve", "thirteen" , "fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", 
	"twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", 
	"twenty-nine", "thirty"]
	
	if(minutes > 30 && minutes < 45)
	{
		partOfHour = wholeHour - minutes;
		text = `${hMCount[partOfHour]} minutes until ${hMCount[nextHour]}`;
		console.log(text);
	}
	else if(minutes == 45)
	{
		text = `quarter to ${hMCount[nextHour]}`;
		console.log(text);
	}
	else if (minutes > 45 && minutes <= 59)
	{
		partOfHour = wholeHour - minutes;
		text = `${hMCount[partOfHour]} minutes until ${hMCount[nextHour]}`;
		console.log(text);
	}
	else if(minutes == 0)
	{
		text = `${hMCount[hours]} o' clock`;
		console.log(text);
	}
	else if(minutes > 0 && minutes < 15)
	{
		text = `${hMCount[minutes]} past ${hMCount[hours]}`;
		console.log(text);
	}
	else if(minutes == 15)
	{
		text = `quarter past ${hMCount[hours]}`;
		console.log(text);
	}
	else if(minutes > 15 && minutes < 30)
	{
		text = `${hMCount[minutes]} minutes past ${hMCount[hours]}`;
		console.log(text);
	}
	else if(minutes == 30)
	{
		text = `half past ${hMCount[hours]}`;
		console.log(text);
	}
	
}



convertTimeToWords(5,47);
convertTimeToWords(3,0);
convertTimeToWords(7,29);
convertTimeToWords(5,30);
convertTimeToWords(5,45);
convertTimeToWords(4,15);
convertTimeToWords(6,35);
convertTimeToWords(3,30);
convertTimeToWords(10,57);
convertTimeToWords(1,1);
convertTimeToWords(7,15);
convertTimeToWords(12,45);