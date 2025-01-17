// Elementos del DOM
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');

// Abrir menú móvil
menuButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Cerrar menú móvil
closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Cerrar menú al hacer click en un enlace
const menuLinks = mobileMenu.querySelectorAll('.menu-item');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Cerrar menú al presionar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});