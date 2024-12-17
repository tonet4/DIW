const menuToggle = document.querySelector('.menu-toggle');
const sections = document.querySelectorAll('nav section');

menuToggle.addEventListener('click', () => {
    sections.forEach(section => {
        if (section.style.display === 'flex') {
            section.style.display = 'none'; // Ocultar las secciones
        } else {
            section.style.display = 'flex'; // Mostrar las secciones
            section.style.flexDirection = 'column'; // Asegurarse de que estén en columna
        }
    });
});