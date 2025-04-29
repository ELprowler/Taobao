document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        section.addEventListener('mouseout', () => {
            section.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
});