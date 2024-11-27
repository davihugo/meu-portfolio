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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function handleSubmit(event) {
    event.preventDefault();
    
} 