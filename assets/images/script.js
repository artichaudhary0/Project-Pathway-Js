

const projects = [
    { name: "Color Generator", path: "./Project - 1/simple-color-generator" ,image: "assets/images/project1.png", description: "A simple color generator."},
    { name: "Counter", path: "./Project - 2" ,image: "assets/images/project2.png", description: "How counter works?" },
    { name: "Review", path: "./Project - 3" ,image: "assets/images/project3.png", description: "Show Clients reviews" },
    { name: "Nav-Bar", path: "./Project - 4",image: "assets/images/project4.png", description: "A Responsive Nav bar" },
    { name: "SideBar", path: "./Project - 5" ,image: "assets/images/project5.png", description: "A simple way to show sidebar"},
    { name: "Model", path: "./Project - 6" ,image: "assets/images/project6.png", description: "A simple way to show model"},
    { name: "Question-Answer", path: "./Project - 7" ,image: "assets/images/project7.png", description: "Toggle between show and hide"},
    { name: "Animation", path: "./Project - 8" ,image: "assets/images/project8.png", description: "A simple Animation to open box."},
    { name: "Menu", path: "./Project - 9" ,image: "assets/images/project9.png", description: "Filter menu according to the selection"},
    { name: "Scroll", path: "./Project - 10" ,image: "assets/images/project10.png", description: "Scroll on website"},
    { name: "Project 11", path: "./Project - 11" ,image: "assets/images/project1.png", description: "A simple color generator."},
    { name: "Countdown", path: "./Project - 12" ,image: "assets/images/project12.png", description: "A simple Countdown"},
    { name: "Paragraph", path: "./Project - 13" ,image: "assets/images/project13.png", description: "A Paragraph generator"},
    { name: "Todo", path: "./Project - 14" ,image: "assets/images/project14.png", description: "Todo and Local Storage"},
    { name: "Slider", path: "./Project - 15" ,image: "assets/images/project15.png", description: "A slider with next and previous"},
    { name: "Two counter", path: "./Project - 16" ,image: "assets/images/project16.png", description: "Binded two counter together"},
    { name: "Happy Diwali", path: "./Project - 17" ,image: "assets/images/project17.png", description: "Happy Diwali wishes"},
    { name: "Project 18", path: "./Project - 18" ,image: "assets/images/project2.png", description: "A simple color generator."},
    { name: "Filter", path: "./Project - 19" ,image: "assets/images/project19.png", description: "A simple Filter to filter data"},
    { name: "Toggle", path: "./Project - 20" ,image: "assets/images/project20.png", description: "Toggle between light and dark"},
    { name: "API", path: "./Project - 21" ,image: "assets/images/project21.png", description: "Fetchs data from server."},
    { name: "Api with Description", path: "./Project - 22" ,image: "assets/images/project22.png", description: "Api with multiple data company, colors, description, name:title, price, image"},
    { name: "Fetch Random User", path: "./Project - 23" ,image: "assets/images/project23.png", description: "Fetch Random User from server"},
    { name: "Description", path: "./Project - 24" ,image: "assets/images/project24.png", description: "Description with Tab bar"},
    { name: "Project 25", path: "./Project - 25" ,image: "assets/images/project2.png", description: "A simple color generator."},
    { name: "Project 26", path: "./Project - 26" ,image: "assets/images/project2.png", description: "A simple color generator."},
    { name: "ToolTip", path: "./Project - 27" ,image: "assets/images/project27.png", description: "A way to show description using tooltip"},
    { name: "Animation Counter", path: "./Project - 28" ,image: "assets/images/project28.png", description: "A animation counter till certain value reached."},
    { name: "Video Player", path: "./Project - 29" ,image: "assets/images/project29.png", description: "A simple demo of video player"},
    { name: "Project 30", path: "./Project - 30" ,image: "assets/images/project222.png", description: "A simple color generator."},
    { name: "Pagination", path: "./Project - 31" ,image: "assets/images/project31.png", description: "How Pagination works"},
    { name: "Fetch Api", path: "./Project - 32" ,image: "assets/images/project32.png", description: "Fetch api data from server."},
];

const projectList = document.getElementById("project-list");

projects.forEach((project) => {
    // Create the outer project item container
    const projectItem = document.createElement("div");
    projectItem.className = "project-item";
    projectItem.addEventListener("click", () => openProject(project.path));

    const outerOval = document.createElement("div");
    outerOval.className = "outer-oval";

    const innerOval = document.createElement("div");
    innerOval.className = "inner-oval";

    const img = document.createElement("img");
    img.src = project.image; 
    img.alt = project.name;
    img.className = "project-image";

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;

    const projectDesc = document.createElement("p");
    projectDesc.textContent = project.description;

    innerOval.appendChild(img);
    innerOval.appendChild(projectName);
    innerOval.appendChild(projectDesc);
    outerOval.appendChild(innerOval);
    projectItem.appendChild(outerOval);
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
