function countdown(num){
	if(num<=0){
		console.log('All Done!');
		return;
	}

	console.log(num);
	num--;
	countdown(num)
}

function sumRange(num){
	if(num===1) return 1;
	return num + sumRange(num-1);
}

function factorial(num){ //iterative way
	let total = 1;
	for(let i=num; i > 1; i--){
		total *= i;
	}
	return total
}

function factorial(num){ //recursive solution
	if(num === 1) return 1;
	return num * factorial(num-1)
}

//Helper Recursion
function collectOddValues(arr){ //outer function
	let result = [];

	function helper(helperinput){ //nested helper recursion function
		if (helperinput.length===0){
			return;
		}

		if(helperinput % 2 !==0){
			result.push(helperinput[0])
		}

		helper(helperinput.slice(1))
	}

	helper(arr)

	return result
}


// Pure Recursion
function collectOddValues(arr){
	let newArr = [];

	if (arr.length===0){
		return newArr
	}

	if(arr[0]%2 !==0){
		newArr.push(arr[0])
	}

	newArr = newArr.concat(collectOddValues(arr.slice(1)));
	console.log(newArr)
	return newArr;
}

collectOddValues([1,2,3,4,5])