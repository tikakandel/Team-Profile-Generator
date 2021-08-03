const Engineer= require('./Engineer')
function renderHtml(employees, answers)
{
    employees.forEach(answers  => {
        // //     console.log(employeesName.employeeName)
        // // });
            if (answers.role === "Manager")
            {
                console.log(answers.role +"    "+answers.employeeName);
                console.log(answers.employeeId);
                console.log(answers.OfficeNumber);

            }
            if (answers.role === "Engineer")
            {
                const engineer = new Engineer(answers.employeeName, answers.github);
                console.log( answers.role +"    "+answers.employeeName);
                console.log(answers.employeeId);
                console.log(answers.github);

            }
            if (answers.role === "Intern")
            {
                console.log("Intern     "+ answers.role +"    "+answers.employeeName);
                console.log(answers.employeeId);
                console.log(answers.school);

            }
           
        });
        console.log('Successfully wrote to employee profile')

}    

  
  module.exports = {
    renderHtml,
  };
  
  