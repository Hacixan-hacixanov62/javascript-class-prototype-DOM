"use strict";

// setTimeout(() => {
//    // alert("salam Reshad")
//    window.location.reload();
// }, 3000);

// function checkOddNum(num){
//     return num %2==1;
// }

// function checkEvenNum(num){
//     return num %2==0;
// }

// function sumOfNumsbyCondition(arr, callback){
//     let sum = 0;
//     for (const item of arr) {
//         if(callback(item)){
//            sum+=item
//         }
//     }

//     console.log(sum);
// }


 
// let nums =[1,2,5,6,7,8,9];
// sumOfNumsbyCondition(nums, m => m%2 > 5)


//let nums =[1,2,5,6,7,8,9];

// console.log(result);

// console.log(nums);

//let result = nums.filter( m=>m>5);

// let result = nums.find( m=>m>5);
// console.log(result)

// let result = nums.findIndex( m=>m == 5);
// console.log(result)


// class Animal{
//     constructor(height,width){
//         this.height = height;
//         this.width = width;
//     }
// }

// //let animal = new Animal(100,200);

// //let animal = new Animal(200,300);

// class Bird extends Animal{
//     constructor(a,b){
//       super(a,b)
//       this.name= "Devequshu"; 
//     }

//     // constructor(a,b){
//     //    console.log("5000")
//     //   }

//     getName(t){
//         console.log("ttes")
//     }
// }


// let bird = new Bird();
// console.getName(100)


//console.log(animal.width)


// let name = "sasa";

// let surname = new String();

// surname = 100;

// console.log(surname)

// let isMarried = new Boolean();

// isMarried = true;

// console.log(isMarried)


// class Test{
//     constructor(name){
//         this.name = name;
//     }
// }


// Test.prototype.surname = "Surname for test";

// Test.prototype.getname =function(){
//     console.log("this is a test name")
// }


// let test = new Test("salam")

// test.getname()

// String.prototype.customContains = function(serachText){
//     return this.includes(serachText)
// }

// let name = "Reshad";

// let surname = "Agayev";

// console.log(name.customContains("s"))

// console.log(surname.customContains("r"))

//  let date = new Date();

// // console.log(date)

// let year = date.getFullYear();

// let month = date.getUTCMonth();

// let result = `${month + 1 } - ${year}`;

// console.log(result)

// console.log(year)

// console.log(month)

//let data = Math.pow(2,4)

// let data = Math.sqrt(64)

// console.log(data)



// DOM

// let elems = document.getElementsByTagName("h1")

// for (let i = 0; i < elems.length; i++) {
//     const element =elems[i];
//     console.log(element)
// }


// let elem = document.getElementsByClassName("test")
// console.log(elem)


// important
// let elem = document.getElementById("products")
// console.log(elem)


//let elem = document.querySelector("#products .test");
//let elems= document.querySelectorAll("#products h1");
//elems[1].style.backgroundColor = "Red"

// for (let i = 0; i < elems.length; i++) {
//         const element =elems[i];
//         console.log(element)
//     }
    
// for (const item of elems) {
//     item.style.backgroundColor = "Red"
// }


//let h1 = document.querySelector("h1");

//console.log(h1.innerText)

//console.log(h1.innerHtml)

//h1.innerText = "Reshad bey"

//h1.innerHTML = "<span>Reshad bey</span>"

// h1.style.color = "Teal";
// h1.style.margin = "200px";

//h1.className = "active test salam";

//h1.classList.add("active")

//h1.classList.remove("product")

//console.log(h1.classList.contains("active"));


// h1.setAttribute("id","text")

// console.log(h1.getAttribute("id"))
// console.log(h1.hasAttribute("id"))

let button = document.querySelector(".add-product");

let h1 = document.querySelector("h1");

button.addEventListener("click",function(){
   this.style.backgroundColor = "Magenta"

   h1.style.backgroundColor = "Green";
   h1.style.color = "White";
   h1.style.width = "200px";
   let btnText = this.innerText;
   this.innerText = h1.innerText
   h1.innerText = btnText;
})








