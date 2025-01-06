import inquirer from "inquirer";
import fs from "fs";
import { generateMarkdown } from './utils/generateMarkdown.js';

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "solution",
        message: "What problem does your project solve?"
    },
    {
        type: "input",
        name: "demographic",
        message: "Who is your project for?"
    },
    {
        type: "input",
        name: "goals",
        message: "What are some key goals or objectives?"
    },
    {
        type: "input",
        name: "repo",
        message: "Provide the link to the GitHub Repo"
    },
    {
        type: "list",
        name: "license",
        message: "What license did you use for this project?",
        choices: ["MIT", "APACHE", "GPL", "None"]
    }
];

// Function to generate README content
function generateReadme(data) {
    return `
# ${data.title}

---

## Table of Contents
- [Description](#description)
- [Goals](#key-goalsobjectives)
- [GitHub Repo](#github-repo)

---


## Description
**Problem Solved:**  
${data.solution}

**Target Demographic:**  
${data.demographic}

**Key Goals/Objectives:**  
${data.goals}

---

## GitHub Repo
You can find the project repository at:  
🔗 [${data.repo}](${data.repo})

---
`;
}

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("README.md successfully created!");
        }
    });
}

// Initialize app to prompt user and generate README
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
        console.error("An error occurred during initialization:", error);
    });
}
// Call the init function to start the application
init();
