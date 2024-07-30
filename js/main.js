// toggle icon navbar
let menuIcons = document.querySelector('#menu-icon');
let menuIcon = document.querySelector('#menu-icon i');
let navbar = document.querySelector('.navbar');

menuIcons.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active-nav");
}


// Scrool Section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
            sec.classList.add('show-animate');
            
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
    // sticky header
    let header = document.querySelector('header');
    if(window.scrollY > 100) {
        header.classList.add('sticky');
    }

    // footer
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}