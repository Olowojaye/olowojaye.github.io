let navBar = document.getElementById('navbar');

// let leftNav = document.getElementById('left-nav');

function openNav() {
    navBar.style.width = "100%";
}


function closeNav() {
    let x = window.matchMedia("(max-width: 768px)");
    if (x.matches) {
        navBar.style.width = "0";
    }
}


/* Code for changing active link on scrolling or clicking */
var sections = document.querySelectorAll('.page-section');
var links = document.querySelectorAll('.nav-link');
let scrHeight = screen.height;

window.onscroll = () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop; //distance of section from parent
        //const sectionHeight = section.clientHeight //height of section within view
        const pageOffset = pageYOffset; //distance of current location from top end of page
        if (pageOffset + scrHeight/3 >= sectionTop) {
            current = section.getAttribute('id');
            section.classList.add('show');
        }
        else {
            section.classList.remove('show');
        }
    })

links.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
        link.classList.add('active');
    }
})

};

// function reveal() {  
//     for (var i = 0; i < sections.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = sections[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         sections[i].classList.add("show");
//       } else {
//         sections[i].classList.remove("show");
//       }
//     }
//   };
  
//   window.addEventListener("scroll", reveal);