function showContent(contentId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(contentId).classList.add('active');
}

function toggleDropdown(){
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('hidden');
}

document.getElementById('hamburgerMenu').addEventListener('click', () => {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('hidden');
});

document.querySelector('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.gallery-grid img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

function toggleMenu() {
    const nav = document.querySelector('.nav ul');
    nav.classList.toggle('active');
  }