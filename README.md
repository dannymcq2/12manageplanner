const inquirer = require('inquirer');
const fs = require('fs');

const shapeChoices = ['circle', 'triangle', 'square'];

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text (up to 3 characters):',
        validate: function(value) {
            if (value.length <= 3) return true;
            return 'Please enter up to 3 characters.';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):',
        validate: function(value) {
            if (/^#[0-9A-F]{6}$/i.test(value) || /^[a-zA-Z]+$/.test(value)) return true;
            return 'Please enter a valid color keyword or hexadecimal number.';
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: shapeChoices
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):',
        validate: function(value) {
            if (/^#[0-9A-F]{6}$/i.test(value) || /^[a-zA-Z]+$/.test(value)) return true;
            return 'Please enter a valid color keyword or hexadecimal number.';
        }
    }
];

inquirer.prompt(questions).then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    const width = 300;
    const height = 200;
    const centerX = width / 2;
    const centerY = height / 2;
    const circleRadius = 75;  // Increase the radius to make the circle bigger

    let svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <style>
            .text { fill: ${textColor}; font-size: 30px; text-anchor: middle; dominant-baseline: middle; }
        </style>
    `;

    switch(shape) {
        case 'circle':
            svgContent += `<circle cx="${centerX}" cy="${centerY}" r="${circleRadius}" fill="${shapeColor}" />`;
            svgContent += `<text x="${centerX}" y="${centerY}" class="text">${text}</text>`;
            break;
        case 'triangle':
            svgContent += `<polygon points="${centerX},${centerY - 50} ${centerX - 50},${centerY + 50} ${centerX + 50},${centerY + 50}" fill="${shapeColor}" />`;
            svgContent += `<text x="${centerX}" y="${centerY + 15}" class="text">${text}</text>`;
            break;
        case 'square':
            svgContent += `<rect x="${centerX - 50}" y="${centerY - 50}" width="100" height="100" fill="${shapeColor}" />`;
            svgContent += `<text x="${centerX}" y="${centerY}" class="text">${text}</text>`;
            break;
    }

    svgContent += `</svg>`;

    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
});
