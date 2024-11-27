document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = document.querySelector('.btn-fechar');
    const overlayMenu = document.getElementById('overlay-menu');
    const menuLinks = document.querySelectorAll('.menu-mobile nav a');

    function toggleMenu() {
        menuMobile.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        overlayMenu.classList.toggle('active');
    }

    function closeMenu() {
        menuMobile.classList.remove('active');
        document.body.classList.remove('menu-open');
        overlayMenu.classList.remove('active');
    }

    btnMenu.addEventListener('click', toggleMenu);
    btnFechar.addEventListener('click', closeMenu);
    overlayMenu.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    document.body.addEventListener('touchmove', function(e) {
        if (document.body.classList.contains('menu-open')) {
            e.preventDefault();
        }
    }, { passive: false });

    ScrollReveal().reveal('.hero-content', {
        delay: 200,
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.skills-box', {
        delay: 200,
        interval: 200,
        distance: '50px',
        origin: 'bottom'
    });

    ScrollReveal().reveal('.project-card', {
        delay: 200,
        interval: 200,
        distance: '50px',
        origin: 'bottom'
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

