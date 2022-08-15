const inquirer = require ('inquirer');
const genPage = require ('./src/template');
const fs = require ('fs')
const Manager = require('./lib/manager');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');