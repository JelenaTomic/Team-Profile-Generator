// export function to generate page
generatePage = team => {
    let outputHtml = [];
    outputHtml.push(
        generateManager(team.manager)
    )

    outputHtml.push(
        team.engineers.map(engineer => generateEngineer(engineer)).join("")
    );

    outputHtml.push(
        team.interns.map(intern => generateIntern(intern)).join("")
    );
    return outputHtml.join("");
}
// function that generate manager
generateManager = manager => {
    return `
        <div class="card employee-card">
           <div class="card-header bg-secondary text-white">
               <h2 class="card-title">${manager.getName()}</h2>
               <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body">
               <ul class="list-group ">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
               </ul>
          </div>
     </div>
     `;
};
// function that generate engineer
const generateEngineer = engineer => {
    return `
        <div class="card employee-card">
          <div class="card-header bg-secondary text-white">
              <h2 class="card-title">${engineer.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
          </div>
          <div class="card-body">
               <ul class="list-group">
                   <li class="list-group-item">ID: ${engineer.getId()}</li>
                   <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                   <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
               </ul>
          </div>
      </div>
    `;
};

// create the html for interns
generateIntern = intern => {
    return `
        <div class="card employee-card">
           <div class="card-header bg-secondary text-white">
              <h2 class="card-title">${intern.getName()}</h2>
              <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                 <li class="list-group-item">ID: ${intern.getId()}</li>
                 <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                 <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
          </div>
      </div>
    `;
};


module.exports = team => {

    return `
       <!DOCTYPE html>
       <html lang="en">
           <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Team Members</title>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">                        
               <script src="https://kit.fontawesome.com/6d4035b361.js" crossorigin="anonymous"></script>

              <link rel="stylesheet" href="style.css">
           </head>
           <body>
              <div class="container-fluid">
                  <div class="row">
                     <div class="col-12 jumbotron mb-3 team-heading bg-info">
                          <h1 class="text-center text-white">My Team</h1>
                      </div>
                  </div>
              </div>
              <div class="container">
                  <div class="">
                      <div class="row team-area col-sm d-flex justify-content-center">
                          ${generatePage(team)}
                      </div>
                  </div>
               </div>
           </body>
       </html>
    `;
}; 
