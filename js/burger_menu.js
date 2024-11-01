document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuBarSide = document.querySelector('.menu-bar-side');

    burgerMenu.addEventListener('click', function() {
        menuBarSide.classList.toggle('active');
    });
});