const chalk = require('chalk')
const { dir, error } = require('console')
const fs = require('fs-extra')
const path = require('path')
const { listTemplates ,execCommand} = require("../utils/utils")
const { cwd } = require('process')
const init = async (template, project_name) => {
    console.log(template,project_name)
    const templatePath = path.join(__dirname, `../../templates/${template}`);
    const projectPath = path.join(process.cwd(), project_name)
    try {
        const templates = listTemplates()
        
        await fs.mkdirp(projectPath)
        console.log(chalk.green(`Directory ${project_name} created successfully`))
        await fs.copy(templatePath, projectPath)
        console.log(chalk.green('Installing dependencies..'))
        await execCommand('npm install',{cwd:projectPath})
        await execCommand('npm start',{cwd:projectPath})
        console.log("Server listening on localhost:3000 ")

    }
    catch (error){
        console.log(chalk.red("Error in intializing templates", error.message))
    }

}
module.exports = { init }