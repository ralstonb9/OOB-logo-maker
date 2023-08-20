

const questions = [
    {
        type: 'input',
        message: 'Enter logo text. (no more than 3 characters)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter logo color. (hexadecimal numbers are accepted)',
        name: 'color',
    },
    {
        type: 'list',
        message: 'Choose a logo shape.',
        name: 'shape',
        choices: ['Circle',  'Triangle', 'Square']
    }
]