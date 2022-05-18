
/* Code for changing active link on scrolling or clicking */
var sections = document.querySelectorAll('section');
var links = document.querySelectorAll('.nav-link');
let scrHeight = screen.height;

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop; //distance of section from parent
        //const sectionHeight = section.clientHeight //height of section within view
        const pageOffset = pageYOffset; //distance of current location from top end of page
        if (pageOffset + scrHeight/3 >= sectionTop) {
            current = section.getAttribute('id');
        }
    })

links.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
        link.classList.add('active')
    }
})

})

