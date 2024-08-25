const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { listTemplates, execCommand } = require('../utils/utils');
const { cwd } = require('process');

const init = async (template, project_name) => {
    console.log(`Initializing ${template} template for project: ${project_name}`);

    const templatePath = path.join(__dirname, `../../templates/${template}`);
    const projectPath = path.join(process.cwd(), project_name);

    try {

        const templates = listTemplates();
        if (!templates.includes(template)) {
            throw new Error(`Template "${template}" does not exist.`);
        }


        await fs.mkdirp(projectPath);
        console.log(chalk.green(`Directory ${project_name} created successfully`));


        await fs.copy(templatePath, projectPath);
        console.log(chalk.green('Template files copied successfully'));


        if (template === 'fullstack-app') {
            const frontendPath = path.join(projectPath, 'frontend');
            const backendPath = path.join(projectPath, 'backend');

            console.log(chalk.green('Installing backend dependencies..'));
            await execCommand('npm install', { cwd: backendPath });
            console.log(chalk.green('Installing frontend dependencies..'));
            await execCommand('npm install', { cwd: frontendPath });
        } else {

            console.log(chalk.green('Installing dependencies..'));
            await execCommand('npm install', { cwd: projectPath });
            console.log(chalk.green('Starting server..'));
            await execCommand('npm start', { cwd: projectPath });
            console.log("Server listening on localhost:3000");
        }

    } catch (error) {
        console.log(chalk.red("Error initializing template:", error.message));
    }
};

module.exports = { init };
