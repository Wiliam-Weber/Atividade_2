document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');

    navToggle.addEventListener('click', () => {
        navMobile.classList.toggle('active');
    });
});