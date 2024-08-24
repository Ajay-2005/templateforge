#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
const inquirer = require("inquirer")
const { init } = require("../lib/commands/init")
const { listTemplates } = require('../lib/utils/utils')
const { copySync } = require('fs-extra')
program
    .name("templateforge")
    .description("CLI tool to generate project templates")
    .version('1.0.0')


program
    .command("init")
    .description("intializing a project")
    .action(async () => {
        const choices=listTemplates()
        const answers=await inquirer.prompt([
            {
                type:'list',
                name:'template',
                message:'which template would you like to use',
                choices:choices,
            },
            {
                type:'input',
                name:'projectname',
                message:'Enter your project name',
                default:'my-project'     
            }
        ])
        init(answers.template,answers.projectname)

    })

program.parse(process.argv)
