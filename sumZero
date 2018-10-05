// Given an array of unique integers, find all combinations that sum to zero.

const sumToK = (inputArray, target, index = 0) => {
  if (index == inputArray.length) return [];
  if (inputArray[index] == target) return [[inputArray[index]]];
    
  const result = sumToK(inputArray, target, index + 1);
  const completeCurrent = sumToK(inputArray, target - inputArray[index], index + 1);
    
  for (let j = 0; j < completeCurrent.length; ++j) {
    result.push([inputArray[index], ...completeCurrent[j]]);
  }
  
  return result;
}

const sumZero = (arr) => sumToK(arr, 0);
