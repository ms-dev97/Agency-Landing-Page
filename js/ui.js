const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.style.cssText = 'background: #212529; padding-top: 25px; padding-bottom: 25px';
    } else {
        nav.style.cssText = '';
    }
});

document.querySelector('.nav--toggle').addEventListener('pointerdown', () => {
    nav.querySelector('.nav--links').classList.toggle('show');
});