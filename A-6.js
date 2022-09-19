// - Create a closure which has one inner function

// function sayHello() {
//   let sayHello = "hello!";
//   function sayMe(name) {
//     console.log(`${sayHello} ${name}`);
//   }
//   return sayMe;
// }
// let sayHi = sayHello();
// sayHi("Subhadip");





// - Create a closure which has three inner functions

// function one() {
//   let one = 1;
//   function two(num1) {
//     let two = one + num1;
//     function three(num2) {
//       let three = two + num2;
//       function four(num3) {
//         console.log(three + num3);
//       }
//       return four;
//     }
//     return three;
//   }
//   return two;
// }

// let add = one();
// add(10)(20)(30);





