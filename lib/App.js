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
            choices: ["Manager", "Engineer", "Intern"]
                // choices: function() {
                // if (this.employees.some(employee => employee.role === "Manager")) {
                //     return ["Engineer", "Intern"]
                // } else {
                //     return ["Manager", "Engineer", "Intern"]
                // }
                //  }            
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
              
                //this.answers.push(answers);
                //const emrol=[];
                //Check if addmore is true and ask question again
                if (answers.addMore)    
                {
                   
                   // console.log(this.employees);
                
                    //console.log(answers.role);
                    //this.nextEmployee();
                    //answers.push(answers);
                    switch (answers.role) {
                        case "Manager":
                            this.employees.push(new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.OfficeNumber));
                             this.nextEmployee();

                            // console.log(this.employees);
                            break;
                        case "Engineer":
                            this.employees.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
                            this.nextEmployee();
                            //console.log("test " +answers.employeeName);
                            break;
                        case "Intern":
                            this.employees.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school));
                            this.nextEmployee();
                            break;
                    }
                    //this.renderHTML();
                }
                        
                
        
               if (!answers.addMore)    
                {
                    switch (answers.role) {
                        case "Manager":
                            this.employees.push(new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.OfficeNumber));
                           //  this.nextEmployee();

                            // console.log(this.employees);
                            break;
                        case "Engineer":
                            this.employees.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
                           // this.nextEmployee();
                            //console.log("test " +answers.employeeName);
                            break;
                        case "Intern":
                            this.employees.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school));
                         //   this.nextEmployee();
                            break;
                    console.log("HTML is generated");
                    //this.employees.forEach = () => this.renderHTML();
                }    
            }

                      
                //     {
                //         console.log(this.employees);
                   
                //         this.renderHTML();
                //         this.employees.forEach(e => {
                //          this.renderHTML();
                //           })                 
                //     }
                    // if (!answer.some(employee => employee === "Manager")){
                    //     console.log("You must add a manager!");
                    // this.nextEmployee()
                    // }
                    // else{
                       
                    //}
                // write these answers to a file (final html)
                  
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
                //console.log('HTML generated!');
            });
            
        });

    }

    //return javascript that generates an employee information card per employee in the employees list
    getScript() {

        var scripts = ``;
        this.employees.forEach(e => {
          
            var field = "";
            var iconClass = "";
            switch (e.getRole()) {
                case "Manager":
                    field = `Office #: ${e.getOfficeNumber()}`;
                    iconClass = `user-secret fa-3x`;//<i class="fas fa-user-secret"></i>
                    break;
                case "Engineer":
                    field = `Github: ${e.getGithub()}`;
                    iconClass = `tools fa-3x`;
                    break;
                case "Intern":
                    field = `School: ${e.getSchool()}`;
                    iconClass = `user-graduate fa-3x`;
                    break;
            }

            var cardScript = `
            <script>
            var col = $('<div class="col-4">');
            var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
            var header1 = $('<div class="card-header text-center h4">');
            header1.text("${e.getName()}");
            var header2 = $('<div class="card-header text-center">');
            var icon = $('<i class="fas fa-${iconClass}">');
            header2.text(" ${e.getRole()}");
            header2.prepend(icon);

            var cardBody = $('<div class="card-body text-info">');
            var cardTitle = $('<h5 class="card-title">');
           
            var cardText = $('<p class="card-text">');
            cardText.text("ID: ${e.getId()}");
            var cardText2 = $('<p class="card-text">');
            cardText2.text("Email: ${e.getEmail()}");
            var cardText3 = $('<p class="card-text">');
            cardText3.text("${field}");
            cardBody.append(cardTitle);
            cardBody.append(cardText);
            cardBody.append(cardText2);
            cardBody.append(cardText3);
    
            card.append(header1);
            card.append(header2);
            card.append(cardBody);
            col.append(card);
            $("#cards").append(col);    
            </script>        
            `;
            scripts += cardScript;

        });
        return scripts;
    }

}
module.exports = App;