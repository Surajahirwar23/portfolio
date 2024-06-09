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
        title : 'E-Com Website',
        icon: '<i class="ri-shopping-cart-fill"></i>',
        descipton: 'I develop secure and scalable e-commerce platforms that help you sell your products online. From shopping cart integration to payment gateway setup, I cover all aspects of your online store.',
           href: 'Ecom.html'
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


    let servicediv = "";

    serviceData.forEach(data=>{
        servicediv+=  `
        <div>
             <a class="anchor" href=${data.href}>
            <h1>${data.icon}</h1>
            <h2>${data.title}</h2>
            <p>${data.descipton}</p>
            </a>
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

