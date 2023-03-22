//Given an array of unsorted numbers.
//Return the index of the following target if the target exists in the array. 
//If the target is not found, return null.
//let num = [45,12,6,89,2,5]
//let target = 6
function mergeSort(num){
   if (num.length<=1){
      return num
   }
   let middle= Math.floor(num.length/2);
   let leftNum = num.slice(0,middle);
   let rightNum=num.slice(middle);

   return merge(mergeSort(leftNum),mergeSort(rightNum));
}
function merge(leftNum,rightNum){
 let result=[]
 while (leftNum.length && rightNum.length){
   if(leftNum[0]<=rightNum[0]){
      result.push(leftNum.shift());
   }
   else{
      result.push(rightNum.shift());
   }
 }
 while (leftNum.length){
   result.push(leftNum.shift())
 }
 while (rightNum.length){
   result.push(rightNum.shift())
 }
 return result
}
// let num=[45,12,6,89,2,5];
// let sortedNum=mergeSort(num);
// console.log (sortedNum);
function binary(num,target){
   let left=0;
   let right= num.length-1;
  
    while( left<=right){
  
      let middle=Math.floor((left+right)/2);
      if(num[middle]===target){
          return middle
      }
      else if(num[middle]>target){
          right=middle-1;
    }
    else{
      left=middle+1
    }
  }
  return null;
  }
  let num=[45,12,6,89,2,5];
  let target=6;
let sortedNum=mergeSort(num);
console.log (sortedNum);
  console.log(binary(num,target));

//Given an unsorted array of numbers return the sorted array in descending order
let arr=[123,89,5,23,9,56]
function descending (arr,merge){
    let leftIndex = 0;
    let rightIndex = length-1;
    while(leftIndex.length&&rightIndex.length){
        if(leftIndex [0]<rightIndex[0]);{
        arr.push(leftIndex.shift());
    }
}
return[...arr ,...leftIndex,...rightIndex];
}
function mergedSort(unsortedArray){
    const middleIndex = unsortedArray.length/2;
    if(unsortedArray.length<2){
        return unsortedArray;
    }
    const leftIndex = unsortedArray.splice(0,middleIndex);
    return mergeArrays(mergeSort(leftIndex)),mergeSort(unsortedArray);
}

function mergingSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergingSort(left), mergingSort(right));
  }
  function searched(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] >= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }
  let arr4 = [123, 89, 5, 23, 9, 56];
  arr = mergeSort(arr);
  console.log(arr);
function findTarget(arr, target) {
        arr = mergeSort(arr);
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) {
            return mid;
          } else if (arr[mid] < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return null;
      }
      function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
      }
      function merge(left, right) {
        let result = [];
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            result.push(left.shift());
          } else {
            result.push(right.shift());
          }
        }
        return [...result, ...left, ...right];
      }
      //Given the following array, search for the following target
      let target2 = 34;
      let arr2 = [1, 4, 78, 2, 67, 3];
      
      function mergeSort(arr2){
        if (arr2.length<=1){
           return arr2;
        }
        let middle= Math.floor(arr2.length/2);
        let leftNum = arr2.slice(0,middle);
        let rightNum=arr2.slice(middle);
     
        return merge(mergeSort(leftarr2),mergeSort(rightarr2));
     }
     
      

