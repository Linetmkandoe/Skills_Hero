document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.navigation-menu').classList.toggle('show');
});
