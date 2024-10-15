// - Define an array of numbers as numbers=[3,1,2,4,3,5,1];/
//  Write a JavaScript code to remove duplicate items from an array
let arrNum = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 12];

// arrNum.sort((a, b) => a - b);

// console.log(arrNum); // [1, 2, 2, 2, 3, 3, 4, 6, 7, 8, 10, 12]
// arrNum.sort((a,b)=>b-a);
// console.log(arrNum)//[12, 10, 8, 7, 6, 4, 3, 3, 2, 2, 2, 1]

// for (var i = 0; i < arr.length; i++) {
//     if (!newarr.includes(arrNum[i])) {
//         newarr.push(arrNum[i]);
//     }
// }

// console.log(newarr); //output // [3, 1,2,4,5]
// console.log("/////////////////");
//  result =arrNum.filter(function (ele){
//     return ele > 50;
// })
// console.log(result); //output []

// console.log("/////////////////");
// sort 
// arr.sort(function(a,b){
//     return a -b;
// })
// console.log(arr);
// // output 
//   [  1,
//     1,
//     2,
//     3,
//     4,
//     5
// ]
// console.log("/////////////////");
// let filteredNumbersUserDefined = filterGreaterThan50(numbers);
// console.log(filteredNumbersUserDefined); // Output: []
// built in function
// function filterGreater50(...arra){
//     let result=[];
//     for(i=0;i<=arr.length;i++){
//         if(arra[i]>50)
//             result[i].push(arr[i]);
//     }
//       return result ;   
// }
//  console.log(filterGreater50(3, 1, 2, 4, 5, 1));//output
// console.log("/////////////////");
// let arr = [3, 1, 2, 4, 5, 1];

function gather(arr) {
    var max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function small(arr) {
    var min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

let maxnum = gather(arrNum);
let minnum = small(arrNum);

console.log("Max Num:", maxnum);//12
console.log("Min Num:", minnum);//1
// console.log("/////////////////");
//
// let arr = [3, 1, 2, 4, 5, 1];
// let MaxNumber=Math.max(...arr) ;
// let MinNumber=Math.min(...arr) ;
// console.log("MaxNumber :",MaxNumber);  //output 5
// console.log("MinNumber :",MinNumber);  // output 1
// console.log("/////////////////");
//EMC6
// function sumAll(...numbers) {
//     console.log(eval(numbers.join("+")));
//   }
  
//   sumAll(3, 1, 4, 5, 2); // Output: 15
// console.log("/////////////////");
// EMC5

// function sumAll(numbersArray) {
//     return eval(numbersArray.join("+"));
//   }
  
//   console.log(sumAll([3, 1, 4, 5, 2])); // Output: 15
// ///