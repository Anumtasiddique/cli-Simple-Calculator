#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "FirstNumber" },
    { message: "Enrer second number", type: "number", name: "SecondNumber" },
    {
        message: "select one of the operator to perform opetration",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber % answer.SecondNumber);
}
else {
    console.log("please select valid operator");
}
;
