document.addEventListener("DOMContentLoaded", function () { //rodará após DOM estar carregado 
    const filterButtons = document.querySelectorAll('.filter');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach((button) =>
        button.addEventListener('click', function (e) {
            const selectedTecnology = e.target.textContent;

            if (selectedTecnology === "All") {
                projects.forEach((project) => {
                    project.style.display = "grid";
                });
            } else {
                projects.forEach((project) => {
                    const technologyProject = project.querySelectorAll('.technology');
                    let projectHasThisTecnology = false;
                    
                    technologyProject.forEach((technology) => {
                        if (technology.textContent === selectedTecnology) {
                            projectHasThisTecnology = true;
                        }
                    });
                if (projectHasThisTecnology == true) {
                    project.style.display = "grid";
                } else {
                    project.style.display = "none";
                }
                })
            }
        })
    )
})