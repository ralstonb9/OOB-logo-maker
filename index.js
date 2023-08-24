const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes')

function init() {

    const questions = [
        {
            type: 'input',
            message: 'Enter logo text. (no more than 3 characters)',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter logo color. (keyword or hexadecimal number accepted)',
            name: 'setColor',
        },
        {
            type: 'list',
            message: 'Choose a logo shape.',
            name: 'setShape',
            choices: ['Circle',  'Triangle', 'Square']
        },
        {
            type: 'input',
            message: 'Enter a color for your shape. (keyword or hexadecimal number accepted)',
            name: 'shapeColor'
        }
    ];
    
    inquirer.prompt(questions).then((answers) => {
        let shapeObj;
        
        switch (answers.setShape) {
            case 'Circle':
                shapeObj = new Circle(answers.shapeColor);
                break;
            case 'Triangle':
                shapeObj = new Triangle(answers.shapeColor);
                break;
            case 'Square': 
                shapeObj = new Square(answers.shapeColor);
                break;
        }
        
        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeObj.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.setColor}">${answers.text}</text>
        </svg>
        `;
        
        fs.writeFileSync('logo.svg', svg);
        console.log('Logo Created!')
    });

};

init()