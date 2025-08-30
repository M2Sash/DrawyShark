function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('show');
}

window.addEventListener('resize', () => {
    const menu = document.getElementById('mobileMenu');
    if (window.innerWidth > 700 && menu.classList.contains('show')) {
            menu.classList.remove('show');
    }
});
