const openBtn = document.getElementById("open__btn");
const closeBtn = document.getElementById("close__btn");
const navMenu = document.getElementById("nav__menu");

function openNav() {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    navMenu.style.display = "block";
}

function closeNav() {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    navMenu.style.display = "none";
}


const scroll = new LocomotiveScroll({
    el: document.querySelector('.scroll'),
    smooth: true
});

document.addEventListener("contextmenu", function(e){
    e.preventDefault()

},false)



const projectData = [
    {
        projectImage: 'https://img.freepik.com/free-photo/top-view-desk-top-with-list-notebook_23-2148443714.jpg?size=626&ext=jpg&ga=GA1.1.434839779.1711945115&semt=ais',

        projectName: "Todo list app",

        projectDescription: 'Developed a dynamic and user-friendly web application using JavaScript for creating and managing todo list. The application allows users to add, and delete tasks, as well as mark them as completed.',

        projectcodeLink: 'https://github.com/Surajahirwar23/To-do-App.git',

        projectLiveLink:   'https://surajahirwar23.github.io/To-do-App/',
    },
    {
        projectImage: 'https://imgs.search.brave.com/Owo7MY7rR5Xcr01lAQsB5OYUWXsUJbWrIZFSM3CstuA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEwOTgz/Mzc3L3NjcmVlbnNo/b3RzLzE3ODM2ODE5/L21lZGlhLzkyOWQ1/MDBjZjFkMmEyYzAz/YWExMDU1ODAxMWM0/ZDgxLnBuZz9yZXNp/emU9NDAweDA',

        projectName: "Myntra Web clone",

        projectDescription: 'Developed a e-commerce responsive website using HTML, CSS and JavaScript. Implemented product listing, shopping cart funtionalities',

        projectcodeLink: 'https://github.com/Surajahirwar23/Myntra-Web-Clone.git',

        projectLiveLink:   'https://surajahirwar23.github.io/Myntra-Web-Clone/',
    },
]

function projectDisplay() {
    let projectContainer = document.querySelector(".projectContainer")


    // let projectdiv = document.createElement("div");
    let projectdiv = "";

    projectData.forEach(data=>{
        projectdiv+=  `
        <div class="projects">
        <div class="image">
        <img src=${data.projectImage}>
      </div>
      <div class="project__desc">
        <h1 class="name">${data.projectName}</h1>
        <p class="desc">${data.projectDescription} </p>
        <div class="projectbutton">
              <button class="default_btn contact__btn projectbtn"> <a
                  href="${data.projectcodeLink}">GET CODE</a></button>
              <button class="default_btn contact__btn projectbtn"> <a
                  href="${data.projectLiveLink}">LIVE PREVEIW</a></button>
            </div>
      </div>
      </div>
        `
        })
        projectContainer.innerHTML = projectdiv
}

projectDisplay()