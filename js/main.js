// Animación de aparición al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});


// Lightbox simple para las galerías de proyectos
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
        lightboxImg.src = thumb.dataset.full;
        lightboxImg.alt = thumb.alt;
        lightbox.showModal();
    });
});

lightbox.addEventListener('click', () => {
    lightbox.close();
    lightboxImg.src = ''; // Limpiar para no acumular memoria
});
