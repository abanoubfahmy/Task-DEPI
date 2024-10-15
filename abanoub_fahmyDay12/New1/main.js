

// function convertLetter(str) {
//     return str.split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
//   }
  
//   console.log(convertLetter('the quick brown fox')); // Output: "The Quick Brown Fox"
// function convertLetter(str) {
//     return str.split(' ').map(word => {
//       return word[0].toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
//   }
  
//   console.log(convertLetter('the quick brown Fox')); // Output: "The Quick Brown Fox

//   function longestWord(str) {
//     let maxLength = 0;
//     let longestWord = '';
  
//     str.split(' ').filter((word) => {
//       if (word.length > maxLength) {
//         maxLength = word.length;
//         longestWord = word;
//       }
//     });
  
//     return longestWord;
//   }

//   function longestWord(str) {
//     return str.split(' ').reduce((a, b) => a.length > b.length ? a : b);
//   }
  
//   console.log(longestWord('Web Development Tutorial')); // Output: "Development"
//   /*function logest_Usega_reducer(...args) {
//     return args.join(' ').split(' ').reduce((acc, current) => {
//       return acc.length > current.length ? acc : current;
//     });
//   }
  
//   console.log(logest_Usega_reducer("Web", "Development", "Tutorial")); // Output: "Development"*/



 
// function getMonthName(date) {
//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   return monthNames[date.getMonth()];
// }
// const date = new Date("2003-10-16");
// console.log(getMonthName(date)); // Output: "July"
// //3-Write a JavaScript function that returns a passed string with letters in alphabetical order  
// //Example : javascript  
// //Output : aacijprstv 
// function sortString(str) {
//   return str.split('').sort().join('');
// }
// console.log(sortString("javascript"))
// //Write JavaScript function that returns random array of 5 numbers between 1:10   without repetition 
// function randomArray() {
//   let arr=[];
//   for(let i=0;i<=5;i++){
//     let iterat= (Math.round((Math.random)*10));
//     arr.push(iterat);
//   }
//   return arr;
// }

// function twoDit(){
//   let twoNumber=prompt("please enter two number");
//     if(twoNumber.length==0||(isNaN(twoNumber))){
//       alert("please enter two number");
//       twoDit()
//     }else{
//   console.log("two number")
//     }
// }
// console.log(twoDit())
function twoDit() {
  let twoNumbers = prompt("Please enter two numbers separated by a space");
  let numbers = twoNumbers.map(Number);
  if (numbers.length <= 2 || numbers.some(isNaN)) {
    alert("Please enter two numbers separated by a space");
    twoDit();
  } else {
    console.log(numbers);
  }
}
twoDit();
// let countOfNumbersToSum = prompt("Please enter how many numbers you want to sum:"); 
// let theNumbers = prompt("Please enter the numbers seperated with a space:"); 
// let theSum = 0; 
// while (theNumbers.split(" ").length !== +countOfNumbersToSum) { 
//     theNumbers = prompt(`Those numbers are not count as the numbers you want to sum, 
//         Please enter the numbers again seperated with a space:`); 
// } 
// if (theNumbers.split(" ").length === +countOfNumbersToSum) { 
//     for(let value of theNumbers){ 
//         theSum += +value; 
//     }; 
// } 
// console.log(theSum);