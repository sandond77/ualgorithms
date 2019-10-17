import { element, array } from "prop-types";

// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise return -1.

// Test Cases
// binarySearch([1,2,3,4,5], 2) //1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],10) // 2
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],95) // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],100) // -1

function binarySearch(){

}

// Pseudocode
// 1. Left starts at first element. Right starts at last element. Mid point is array.length/2. 
// 2. Compare midpoint value to desired value.
// 	a. If Midpoint > value, set old midpoint as right. New mid point will be new array length/2. 
// 	b. If Midpoint < value, set old midpoint as left. New midpoint will be new array length/2.
// 3. Repeat until value is found and return the index. 
// 	a. Return -1 if value is not found.