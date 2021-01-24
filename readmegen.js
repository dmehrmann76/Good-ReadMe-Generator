const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message:"What is the project title?",
            name:'title',
            validate: (value)=>{ if(value){return true} else {return 'need a value to continue'}},
        },
        {
            type: 'input',
            message:"What is the project description?",
            name:'description',
            validate: (value)=>{ if(value){return true} else {return 'need a value to continue'}},
        },
        {
            type: 'input',
            message:"What are the installation instructions?",
            name:'installation',
            validate: (value)=>{ if(value){return true} else {return 'need a value to continue'}},
        },
        {
            type: 'input',
            message:"Were there any contributors",
            name:'contributors',
            validate: (value)=>{ if(value){return true} else {return 'need a value to continue'}},
        },
        {
            type: 'list',
            message:"What kind of license is being used?",
            name:'license',
            choices:['The MIT License', 'GNU License', 'Apache License', 'The GPL License', 'None'],
            validate: (value)=>{ if(value){return true} else {return 'need a value to continue'}},
        },
        {
            type: 'input',
            message:"GitHub username:",
            name:'git',
            validate: (value)=>{ if(value){return true} else {return 'need a value to continue'}},
        },
        {
            type: 'input',
            message:"E-mail:",
            name:'email',
            validate: (value)=>{ if(value){return true} else {return 'need a value to continue'}},
        }
    ]
).then(({
    title, 
    description,
    installation,
    contributors, 
    license, 
    git,
    email
})=>{
const template = `# ${title}

* [Description](#description)
* [Installation](#installation)
* [Contributors](*contributors)
* [License](*license)
# Installation
${installation}
## Contributors 
${contributors}
## License 
${license}

# Contact
* Github :${git}
* Email :${email}`;

createNewFile(title,template);
}
);
function createNewFile(fileName, data){
    fs.writeFile(`./${fileName.toLowerCase().split('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your ReadMe is now completed');
    })
}