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

