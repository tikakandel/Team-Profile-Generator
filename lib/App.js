const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const fs = require('fs');
// user input , user must select manager 


class App{
    constructor()
    {
        this.employees=[];
        this.employeePrompt =
        [{
            name: "employeeName",
            message: "What is the employee name?",
            type: 'input',
            validate: (input) => input.length > 0 ? true : "You must enter the employee name"
        },
        {
            name: "employeeId",
            message: ({employeeName}) => `What is the ${employeeName}'s employee ID?`,
            type: 'input',
            validate: (input) => (!isNaN(input)) && input.length > 0? true : "You must enter the employee ID"            
        },
        {
            name: "employeeEmail",
            message: ({employeeName}) => `What is ${employeeName}'s email address?`,
            type: 'input',
            validate: (input) =>input.includes("@") && input.length > 0 ? true : "You must enter valid email address?"
            
        },
        {
            name: "role",
            message: ({employeeName}) => `What is ${employeeName}'s role?`,
            type: 'list',
            //choices: ["Manager", "Engineer", "Intern"]
                choices: () => {
                if (this.employees.some(employee => employee.role === "Manager")) {
                    return ["Engineer", "Intern"]
                } else {
                    return ["Manager", "Engineer", "Intern"]
                }
                 }            
            },
        {
            name: 'OfficeNumber',
            message: ({employeeName}) => `What is ${employeeName}'s Office Number?`,
            type: 'input',
            when: (answers) => answers.role === "Manager",
            validate: (input) => (!isNaN(input)) && input.length > 0? true : "You must enter a Office Number "
        },
        {
            name: 'github',
            message: ({employeeName}) => `What is ${employeeName}'s  github?`,
            type: 'input',
            when: (answers) => answers.role === "Engineer",
            validate: (input) => input.length > 0 ? true : "You must enter a github username "
        },
        {
            name: 'school',
            message: ({employeeName}) => `What is the ${employeeName}'s  school name`,
            type: 'input',
            when: (answers) => answers.role === "Intern",
            validate: (input) => input.length > 0 ? true : "You must enter a school name",
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Would you like to add more employees?'
        },
    ];
    
    }
  
  
  start()//application
  {
       this.nextEmployee();
  }
 
  //Call inquierer to prompt user to select a role and fill out information about that role. If exit is chosen, the HTML gets rendered.
    // Else a new employee is created and pushed to tthe aray of employees. Calls to start from the beggining.
  
    nextEmployee()
    {
        inquirer.prompt(this.employeePrompt).then(answers => {
           
                //Check if addmore is true and ask question again
                if (answers.addMore)    
                {
                   
                   
                    switch (answers.role) {
                        case "Manager":
                            this.employees.push(new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.OfficeNumber));
                             this.nextEmployee();
                                
                            break;
                        case "Engineer":
                            this.employees.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
                            this.nextEmployee();
                            break;
                        case "Intern":
                            this.employees.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school));
                            this.nextEmployee();
                            break;
                    }
                }
                        
                
                
               if (!answers.addMore)    
                {
                    switch (answers.role) {
                        case "Manager":
                            this.employees.push(new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.OfficeNumber));
                            break;
                        case "Engineer":
                            this.employees.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
                            break;
                        case "Intern":
                            this.employees.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school));
                            break;
                    console.log("HTML is generated");
                  
                }    
            }
           // write these answers to a file (final html)
         //before writing answer check if manager is adede or not 
        //    if (!answer.some(employee => employee === "Manager")){
        //         console.log("You must add a manager!");
        //         this.nextEmployee()
        //      }

                this.employees.forEach(e  =>{
                    this.renderHTML();
                });
             
            }).catch((err) => console.error(err));
    }
    //Reads a template html file and adds javascript string literal by calling get script
    //Writes an rendered team profile in html
    renderHTML() {
        fs.readFile('template/main.html', 'utf8', (err, htmlString) => {
    
            htmlString = htmlString.split("<script></script>").join(this.getScript());

            fs.writeFile('output/index.html', htmlString, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
                // success case, the file was saved
                
            });
            
        });

    }

    //return javascript that generates an employee information card per employee in the employees list
    getScript() {

        var scripts = ``;
        this.employees.forEach(e => {
          
            var employeesField = "";
            var iconClass = "";
            switch (e.getRole()) {
                case "Manager":
                    employeesField = `Office #: <a href=tel:${e.getOfficeNumber()}>${e.getOfficeNumber()} </a>`;
                    iconClass = `user-secret fa-3x`;//<i class="fas user-graduate fa-3x"></i>
                    break;
                case "Engineer":
                    //employeesField =`https://github.com/${e.getGithub()}`;
                
                    employeesField = `Github: <a href=https://github.com/${e.getGithub()}> ${e.getGithub()} </a> `;
                    iconClass = `tools fa-3x`;
                    break;
                case "Intern":
                    employeesField = `School: ${e.getSchool()}`;
                    iconClass = `user-graduate fa-3x`;
                    break;
            }


            var generateHtmlforCard = ` <script>
            var col = $('<div class="col-4">');
            var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
            var employeeName = $('<div class="card-header text-center h4">');
            employeeName.text("${e.getName()}");
            var employeeRole = $('<div class="card-header text-center">');
            var icon = $('<i class="fas fa-${iconClass}">');
            employeeRole.text(" ${e.getRole()}");
            employeeRole.prepend(icon);

            var cardBody = $('<div class="card-body text-info">');
            var cardTitle = $('<h5 class="card-title">');
           
            var employeeId = $('<p class="card-text">');
            employeeId.text("ID: ${e.getId()}");
            var employeeEmail = $('<a class="card-text">');
            employeeEmail.html("Email: <a href=mailto:${e.getEmail()}> ${e.getEmail()}</a>");
            var employeeDisc = $('<p class="card-text">');
            employeeDisc.html("${employeesField}");
            cardBody.append(cardTitle);
            cardBody.append(employeeId);
            cardBody.append(employeeEmail);
            cardBody.append(employeeDisc);
    
            card.append(employeeName);
            card.append(employeeRole);
            card.append(cardBody);
            col.append(card);
            $("#cards").append(col);    
            </script>        
            `;
            scripts += generateHtmlforCard;

        });
        return scripts;
    }

}
module.exports = App;