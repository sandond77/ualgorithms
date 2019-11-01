// Pseudocode
// Break the array into halves using array.slice() until you have the arrays that are empty or have one element
// Continue to break until the array length is <= 1 using recursion
// Use Merge function until the sorted arrays are back at the full length of the array
// Return the merge and sorted array
function merge(arr1,arr2){
		let results = [];
		let i = 0;
		let j = 0;
	
		while(i < arr1.length && j < arr2.length){
			if(arr2[j]> arr1[i]){
				results.push(arr1[i]);
				i++;
			} else {
				results.push(arr2[j]);
				j++
			}
		}
	
		while(i < arr1.length){
			results.push(arr1[i]);
			i++
		}
	
		while(j < arr2.length){
			results.push(arr2[j]);
			j++
		}
		return results
	}
	  
function mergeSort(arr){
	if(arr.length <= 1) return arr;

	let mid  = Math.floor(arr.length/2);
	let left =  mergeSort(arr.slice(0,mid));
	let right = mergeSort(arr.slice(mid))
	
	return merge(left,right)
}

mergeSort([10,24,76,73])