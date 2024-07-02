// Función para ir a una página específica
function irA(pagina) {
    // Oculta todas las páginas
    const todasLasPaginas = document.querySelectorAll('.situation-page, .resolution-page');
    todasLasPaginas.forEach((pagina) => {
        pagina.style.display = 'none';
    });

    // Muestra la página seleccionada
    const paginaSeleccionada = document.getElementById(pagina);
    if (paginaSeleccionada) {
        paginaSeleccionada.style.display = 'block';
    }
}

// Función para volver a jugar
function volverAJugar() {
    // Reinicia el juego volviendo a la primera situación
    irA('situacion1');
}

// Inicialización: muestra la primera situación al cargar la página
window.onload = function () {
    irA('situacion1');
};
