JavaScript pour le Burger Menu

// Ajoutez ce JavaScript dans votre fichier script.js

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuBarSide = document.querySelector('.menu-bar-side');

    burgerIcon.addEventListener('click', function() {
        // Toggle les classes active pour le burger icon et le menu
        this.classList.toggle('active');
        menuBarSide.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    const menuLinks = document.querySelectorAll('.menu-bar-side li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerIcon.classList.remove('active');
            menuBarSide.classList.remove('active');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!burgerIcon.contains(e.target) && !menuBarSide.contains(e.target)) {
            burgerIcon.classList.remove('active');
            menuBarSide.classList.remove('active');
        }
    });
});