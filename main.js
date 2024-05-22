#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blue("\n\t    *************** WELCOME TO WORD COUNTER TOOL ************** \n"));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    },
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.green(`Your sentences word count is. ${words.length}`));
console.log(chalk.yellow("\n\t  ************** THANKS FOR USING MY WORD COUNTER *************\n"));
