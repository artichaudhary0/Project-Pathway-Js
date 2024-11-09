

const projects = [
    { name: "Project 1", path: "./Project - 1/simple-color-generator" },
    { name: "Project 2", path: "./Project - 2" },
    { name: "Project 3", path: "./Project - 3" },
    { name: "Project 4", path: "./Project - 4" },
    { name: "Project 5", path: "./Project - 5" },
    { name: "Project 6", path: "./Project - 6" },
    { name: "Project 7", path: "./Project - 7" },
    { name: "Project 8", path: "./Project - 8" },
    { name: "Project 9", path: "./Project - 9" },
    { name: "Project 10", path: "./Project - 10" },
    { name: "Project 11", path: "./Project - 11" },
    { name: "Project 12", path: "./Project - 12" },
    { name: "Project 13", path: "./Project - 13" },
    { name: "Project 14", path: "./Project - 14" },
    { name: "Project 15", path: "./Project - 15" },
    { name: "Project 16", path: "./Project - 16" },
    { name: "Project 17", path: "./Project - 17" },
    { name: "Project 18", path: "./Project - 18" },
    { name: "Project 19", path: "./Project - 19" },
    { name: "Project 20", path: "./Project - 20" },
    { name: "Project 21", path: "./Project - 21" },
    { name: "Project 22", path: "./Project - 22" },
    { name: "Project 23", path: "./Project - 23" },
    { name: "Project 24", path: "./Project - 24" },
    { name: "Project 25", path: "./Project - 25" },
    { name: "Project 26", path: "./Project - 26" },
    { name: "Project 27", path: "./Project - 27" },
    { name: "Project 28", path: "./Project - 28" },
    { name: "Project 29", path: "./Project - 29" },
    { name: "Project 30", path: "./Project - 30" },
    { name: "Project 31", path: "./Project - 31" },
    { name: "Project 32", path: "./Project - 32" },
];

const projectList = document.getElementById("project-list");

projects.forEach((project, index) => {
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";
    projectItem.textContent = project.name;
    projectItem.addEventListener("click", () => openProject(project.path));
    projectList.appendChild(projectItem);
});

function openProject(path) {
    window.open(`${path}/index.html`, '_parent');
}

const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
