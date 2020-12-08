const toggle = document.querySelector('nav input');
const navbar = document.querySelector('nav');

toggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
})