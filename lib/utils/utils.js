const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util'); 
const chalk = require('chalk');

const templatePath = path.join(__dirname, '../../templates');


const listTemplates = () => {
    try {
        choices=fs.readdirSync(templatePath);
        return choices
    } catch (err) {
        console.log(chalk.red("Error in listing directory:", err));
        return []; // Return an empty array in case of an error
    }
}

// Promisify the exec function
const execPromise = promisify(exec);

const execCommand = async (command, options = {}) => {
    try {
        const { stdout, stderr } = await execPromise(command, options);
        if (stderr) {
            console.log(chalk.red("Error in executing command:", stderr));
        } else {
            console.log(stdout);
        }
    } catch (err) {
        console.log(chalk.red("Error in executing command:", err));
    }
}

module.exports = { listTemplates, execCommand };
