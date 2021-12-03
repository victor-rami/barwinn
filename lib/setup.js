// const inquirer = require('inquirer');
// const fs = require('fs');

// let barwinConfig = {};


// inquirer.prompt(
//     [
//         {
//             name: 'commitAmount',
//             message:'How much $BNB do you want to commit for each position?',
//             default: '0.01'
//         }
//     ]
// ).then(
//     answers => {

//         console.info('Commit Amount:',answers.commitAmount);
//         barwinConfig.push({runContext:answers.commitAmount});
//     });


// // barwinConfig.runContext = inquirer.answers.commitAmount;


// let data = JSON.stringify(barwinConfig);


// // console.log('Writing barnwinConfig.json..');

// fs.writeFile('barwinConfig.json', data, (err) => {
//     if (err) throw err;
//     console.log('barwinConfig.json complete!')
// });