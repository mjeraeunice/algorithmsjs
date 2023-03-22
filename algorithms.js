//Given an array of unsorted numbers.
//Return the index of the following target if the target exists in the array. 
//If the target is not found, return null.
//let num = [45,12,6,89,2,5]
let target = 6
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
let num=[45,12,6,89,2,5];
let sortedNum=mergeSort(num);
console.log (sortedNum);











//Given an unsorted array of numbers return the sorted array in descending order
//let arr=[123,89,5,23,9,56]
function mergedSort(arr){
   if (arr.length<=1){
      return arr
   }
   let middle= Math.floor(arr.length/2);
   let leftArr1= arr.slice(0,middle);
   let rightArr1=arr.slice(middle);

   return merge(mergeSort(leftArr),mergeSort(rightArr));
}
function merged(left1Arr,right1Arr){
 let result=[]
 while (left1Arr.length && right1Arr.length){
   if(left1Arr[0]<=right1Arr[0]){
      result.push(left1Arr.shift());
   }
   else{
      result.push(right1Arr.shift());
   }
 }
 while (left1Arr.length){
   result.push(left1Arr.shift())
 }
 while (right1Arr.length){
   result.push(right1Arr.shift())
 }
 return result2
}
let arr=[123,89,5,23,9,56];
let sortedArr=mergedSort(num);
console.log (sortedArr);
