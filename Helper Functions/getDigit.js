// My Solution
function getDigit(num,index){
	str = num.toString();
	index = Math.abs(index-str.length)
	console.log(index)
	return index
}


// Given Solution
// function getDigit(num, index){
// 	return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
// }


getDigit(12345,0)
getDigit(12345,1)
getDigit(12345,2)
getDigit(12345,3)
getDigit(12345,4)
getDigit(12345,5)