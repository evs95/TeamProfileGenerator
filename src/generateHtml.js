const fs = require('fs');

const generateHtml = (employeeArray) => {
    fs.readFile('./dist/index.html', 'utf8', (error, data) => {
        error ? console.error(error) : "";

        var teamContent = '';

        for(const element of employeeArray) {
            let data1 = `<div class="card pb-2" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <div>{name}</div>
                <div>{role}</div>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: {id}</li>
                    <li class="list-group-item">Email: <a href='mailto:{email}' target='_blank'>{email}</a></li>
                    <li class="list-group-item">{variant}</li>
                  </ul>
            </div>
        </div>`;

        for (const property in element) {
            data1 = data1.replace(`{${property}}`, `${element[property]}`);
        }

        data1 = data1.replace(`{role}`, element.getRole());
        data1 = data1.replace(`{email}`, element.getEmail());

        if(element.getRole() == 'Manager'){
            data1 = data1.replace(`{variant}`, `Office number: ${element.officeNumber}`);
          }else if(element.getRole() == 'Engineer'){
            data1 = data1.replace(`{variant}`, `GitHub: <a href='${element.getGithub()}' target='_blank'>${element.github}</a>`);

          }else if(element.getRole() == 'Intern'){
            data1 = data1.replace(`{variant}`, `School: ${element.getSchool()}`);

          }else {
            console.log("Invalid choice selected.");
          }

        teamContent = teamContent + data1;

        };

        data = data.replace(`{teamContent}`, teamContent);

        fs.writeFile(`team.html`, data, (err) =>{
            err ? console.log(err) : console.log(`Successfully created team.html`)
        }
        );
    }
    );
}

  module.exports = generateHtml;
