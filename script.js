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


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.scroll'),
//     smooth: true
// });

// document.addEventListener("contextmenu", function(e){
//     e.preventDefault()

// },false)



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



const serviceData = [ 
    {
        title : 'Web Development',
        icon: '<i class="ri-artboard-fill"></i>',
        descipton: 'I create tailored web solutions that meet your specific business needs. From simple landing pages to complex web applications, I ensure a seamless user experience and robust functionality.',
    },
    {
        title : 'Website Designing',
        icon: '<i class="ri-paint-fill"></i>',
        descipton: 'I design intuitive and engaging user interfaces with a focus on user experience. My designs are user-centric, ensuring that your visitors have a smooth and enjoyable interaction with your site.',
    },
    {
        title : 'Responsive Design',
        icon: '<i class="ri-artboard-fill"></i>',
        descipton: 'I design websites that look great and perform well on all devices, from desktops to smartphones. My responsive designs adapt to various screen sizes, providing an optimal viewing experience for your audience.',
    },
    {
        title : 'E-com Website',
        icon: '<i class="ri-shopping-cart-fill"></i>',
        descipton: 'I develop secure and scalable e-commerce platforms that help you sell your products online. From shopping cart integration to payment gateway setup, I cover all aspects of your online store.',
    },
    {
        title : 'Social Media Marketing ',
        icon: '<i class="ri-video-add-fill"></i>',
        descipton: 'I create and manage effective social media campaigns that increase your brand’s visibility and engagement. By leveraging various social platforms, I help you connect with your audience, drive traffic, and boost conversions.',
    },
    {
        title : 'E-Commerce Operator',
        icon: '<i class="ri-shopping-bag-2-fill"></i>',
        descipton: 'I handle the day-to-day operations of your e-commerce business, from inventory management and order processing to customer service and logistics. I ensure your online store runs efficiently, allowing you to focus on growing your business.',
    },
];


function serviceDisplay() {
    let servicesContainer = document.querySelector(".servicesContainer")


    // let projectdiv = document.createElement("div");
    let servicediv = "";

    serviceData.forEach(data=>{
        servicediv+=  `
        <div>
            <h1>${data.icon}</h1>
            <h2>${data.title}</h2>
            <p>${data.descipton}</p>
        </div>
        `
        })
        servicesContainer.innerHTML = servicediv
}
serviceDisplay()


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