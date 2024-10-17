const resume = document.getElementById("resume");
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const resumeContainer = document.getElementById("resume-container");
const projectsContainer = document.getElementById("project-container");
const aboutContainer = document.getElementById("about-container");

// Show resume container
resume.addEventListener("click", (event) => {
    event.stopPropagation();
    resumeContainer.style.display = "flex";
    projectsContainer.style.display = "none"; // Close others
    aboutContainer.style.display = "none";
});

// Show projects container
projects.addEventListener("click", (event) => {
    event.stopPropagation();
    projectsContainer.style.display = "flex";
    resumeContainer.style.display = "none"; // Close others
    aboutContainer.style.display = "none";
});

// Show about container
about.addEventListener("click", (event) => {
    event.stopPropagation();
    aboutContainer.style.display = "flex";
    resumeContainer.style.display = "none"; // Close others
    projectsContainer.style.display = "none";
});

// Close all containers when clicking on the body
document.addEventListener("click", () => {
    resumeContainer.style.display = "none";
    projectsContainer.style.display = "none";
    aboutContainer.style.display = "none";
});

// Prevent body click from closing when clicking inside the containers
resumeContainer.addEventListener("click", (event) => {
    event.stopPropagation();
});

projectsContainer.addEventListener("click", (event) => {
    event.stopPropagation();
});

aboutContainer.addEventListener("click", (event) => {
    event.stopPropagation();
});
