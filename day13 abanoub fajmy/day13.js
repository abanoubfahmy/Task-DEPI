//1)
// let myImages=document.images
// console.log(myImages)
// let allImag=document.querySelectorAll("img")
// console.log(allImag)
  
// let myBody=document.body
// console.log(myBody);

// let tables = document.querySelectorAll("table");


// let secondTable = tables[1];

// // Query all <td> elements within the second table
// let tdElements = secondTable.querySelectorAll("td");
// console.log(tdElements)

// let fontBlue=document.getElementsByClassName("fontBlue")
// console.log(fontBlue)
// let BGrey=document.getElementsByClassName("BGrey");
// console.log(BGrey)




//2)
// let myP=document.createElement("p");
// //add text
// let myTxt=document.createTextNode("updata paragraph");
// myP.appendChild(myTxt)
// // add body 
// document.body.appendChild(myP)
// //3) updata
// document.querySelectorAll("h2").forEach(function(h2) {
//     h2.textContent = "Updated h2";
// });
// //4) remove
// //remove div (frist)
// let divs=document.querySelectorAll("div");
// divs[0].remove();
// //5) add clone in end body
// // DOM [Cloning]
// // - cloneNode(Deep)
// document.body.append(document.querySelector("span").cloneNode(true));





//3)
//1)
// console.log(document.querySelectorAll("p")[0].parentElement);
// //2)
// console.log(document.querySelector("h1").nextSibling);
// //3)
// document.querySelector(".highlight").style.color="yellow";
// //3
// document.getElementsByTagName("p")[4].previousElementSibling.innerHTML= `<strong>This text is important and bold.</strong>`
// //1)   
// let buttons = document.querySelectorAll("button");
// buttons.forEach(function(button) {
//     button.onclick = function() {
//         console.log("Button clicked!");
//     };
// });
// //2)
// let buttonsRemove = document.querySelectorAll("button");
// buttons.forEach(function(button) {
//     button.onclick = function() {
//         console.log("Button clicked!");
//         button.remove();
//     };
// });
//3)
// document.body.addEventListener("mouseover", function() {
//     document.body.style.backgroundColor = "lightblue"; 
// });

// document.body.addEventListener("mouseout", function() {
//     document.body.style.backgroundColor = "gray";
// });
//4)
// let headers = document.querySelectorAll("h1");

// headers.forEach(function(header) {
//     header.onclick = function() {
//         headers.forEach(function(h) {
//             h.textContent = "Header Updated";
//         });
//     };
// });



//5)
/*
1. document.head:
document: هو الكائن الأساسي الذي يمثل مستند HTML بأكمله.
head: هو خاصية من خصائص الكائن document، وهي تمثل العنصر <head> في الصفحة HTML.
باستخدام document.head، يمكنك الوصول إلى عنصر <head> الموجود في مستند HTML الخاص بك.

2. nodeType:
nodeType: هو خاصية موجودة في جميع عقد الـ DOM (Document Object Model) ويُستخدم لمعرفة نوع العقدة (Node). هذه الخاصية تُعيد رقمًا يشير إلى نوع العقدة.

الأنواع الأساسية للعقد هي:

1: عنصر (Element)، مثل <head>, <body>, <div>, إلخ.
3: نص (Text)، يمثل عقدة نصية.
8: تعليق (Comment)، يمثل تعليقًا في كود HTML. */
// console.log(document.body.nodeName); //1 علشان ده ==>element بيرجع رقم

//2
// let bodyChildren = document.body.childNodes;
// bodyChildren.forEach(function(node) {
//     console.log(node.nodeName);
// });

// // Get the first <p> element
// const firstPElement = document.querySelector('p');

// // Create a new <section> element
// const newSectionElement = document.createElement('section');

// // Set the text content of the new <section> element
// newSectionElement.textContent = 'New Section';

// // Replace the first <p> with the new <section> element
// firstPElement.replaceWith(newSectionElement);

// // Get the <body> element
// const bodyElement = document.querySelector('body');

// // Check if the <body> has child nodes
// const hasChildNodes = bodyElement.hasChildNodes();

// // Log the result
// console.log('Does <body> have child nodes? ', hasChildNodes);
