//My Solution
function digitCount(num){
	let str = num.toString();
	console.log(str.length);
	return str.length
}

//Given Solution
function digitCount(num){
	if(num===0) return 1;
	console.log(Math.floor(Math.log10(Math.abs(num)))+1);
	return Math.floor(Math.log10(Math.abs(num)))+1;
}

digitCount(1)
digitCount(0)
digitCount(423)
digitCount(12345)