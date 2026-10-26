function showSection(sectionId) {
    // Ocultar todas las tarjetas de contenido
    const sections = document.querySelectorAll('.content-card');
    sections.forEach(section => {
        section.classList.remove('active-card');
    });

    // Desactivar todos los botones del menÃº
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Mostrar la secciÃ³n seleccionada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active-card');
    }

    // Marcar el botÃ³n correspondiente como activo
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('href') === `#${sectionId}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}