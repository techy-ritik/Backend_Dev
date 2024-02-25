// const fs=require('fs');

// fs.writeFileSync('hello',"Hello World");

// const array = ["apple", "oranges", " ", "mango", " ", "lemon"];

// const arr = array.map((newArray) => {
//     if(newArray==" "){
//         return "empty String";
//     }
//     else{
//         return newArray;
//     }
// });

// const arr1=array.forEach((ar)=>{
//     console.log(ar)
// })

// console.log(arr);

console.log("a");

console.log("b");

async function cde() {
  try {
    function c() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("c");
        }, 3000);
      });
    }

    function d() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("d");
        }, 0);
      });
    }

    function e() {
      return new Promise((resolve, reject) => {
        console.log("e");
      });
    }

    const cVar = await c();
    console.log(cVar);

    const dVar = await d();
    console.log(dVar);

    const eVar = await e();
    console.log(eVar);
  } catch (err) {
    console.log(err);
  }
}

cde();
