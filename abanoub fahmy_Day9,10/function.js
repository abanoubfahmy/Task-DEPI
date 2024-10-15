/*
1- Create function name it printVariables(value1,value2,value3) (as function 
declaration) takes 3 parameters and return them  a- try to console.log the values 
of value1,value2,value3 on consumingScript.js file ?? local variables are not 
accessible outside function’s block. b- Try to call the function before definition 
line? 

 console.log(printVariables(5,3,10))// this invocation
 function printVariables(value1,value2,value3=6,...reset){
      return value1,value2,value3;  //function that has return statment
 }

// - Call the function with 3 values then print the return d- Try to 
// call the function with less than 3 parameters printVariables(3,5) 
// Then solve the problem of undefined variables 

// */
//solve defulat param
//console.log(printVariables(3,5)); //output undefind
//What if you call the function with too many parameters ? (nore than 3)
// solve reset paramater
function printarguments(a, b, c, d, e) { 
  return arguments; 
 } 
 let localVar = 90;

 console.log('Outside function - before call - localVar:', localVar);
 
 function printVariables(value1, value2, value3 = 100) {
   console.log('Inside function - before definition - localVar:', localVar); // 90
   localVar = 200; // opps changing the global localVar
   let testingVar = 200;
   console.log('Inside function - localVar:', localVar); // 200
   console.log('Inside function - testingVar:', testingVar);
   return [value1, value2, value3];
 }
 
 let result = printVariables(1, 6, 3);
 
 console.log('Outside function - after call - localVar:', localVar); // 200
//  function enterName(){
// var userName = prompt("Please enter your name"); 
// if (userName != "" && userName != null){ 
//     alert(userName); 
// } else { 
//     while (userName == "" || userName == null) { 
//         if (userName == "" || userName == null) { 
//             var person = prompt("Please enter your name"); 
//         }  
//         if (userName != "" && userName != null) { 
//             return alert (userName); 
             
//         } 
//     }       
// }
//   }
// console.log (enterName());
// var userName=prompt("Enter user name")
// if(userName !=""||userName!=null){{
//  alert(userName);}

// }else
//   if(userName =""||userName==null){
//   var userName= prompt("Enter user name");
//   return  console.log(userName)};
function enterName(){
  var userName = prompt("Please enter your name"); 
  if (userName != "" && userName != null){ 
   
      alert(userName); 
      
  } else { 
    enterName()
       
  }
    }
  console.log (enterName());