//  let age = 18; // global variable scope
// if (true) {
    // let firstName = "Mohan"; // local variable scope
    // console.log(firstName);
// }

// let age; // declaire karna

// console.log(age) //initialize karna

// var age ; in jvascript var automatically move to the top
//  console .log(age); and this is called hoisting

// basic objects

// let car = {
//     name: "bantli",
//     modelNumber: 1700,
//     color: "black",
// };

// let message = `my new is ${car.name} and model nomber is ${car.modelNumber} and color is ${car.color}`
// console.log(message);
import inquirer from "inquirer";


let answer = await inquirer.prompt(
    {
        name: "q1",
        message: "what is your name ?",
        type: "input",
    }
)
console.log(`hello ${answer.q1} how are you`);