// Función para mostrar el contenido con una animación
function showContent(htmlContent) {
    const content = document.getElementById('content');
    content.innerHTML = htmlContent;

    // Mostrar el contenido con animación
    content.classList.add('show');
    document.getElementById('btnVolver').style.display = 'block';
}

// Función para ocultar el contenido con una animación
function hideContent() {
    const content = document.getElementById('content');
    content.classList.remove('show');
    document.getElementById('btnVolver').style.display = 'none';

    // Espera para limpiar el contenido después de la animación
    setTimeout(() => {
        content.innerHTML = '';
    }, 300);
}

// Manejadores de eventos para cada botón
document.getElementById('btnListaEnlazada').addEventListener('click', () => {
    showContent(`
        <h2>Lista Enlazada</h2>
        <p>Una lista enlazada es una estructura de datos donde cada elemento contiene un valor y un puntero al siguiente elemento.</p>
        <img src="images/lista-enlazada.png" alt="Ejemplo de Lista Enlazada">
    `);
});

document.getElementById('btnListaDoble').addEventListener('click', () => {
    showContent(`
        <h2>Lista Doble Enlazada</h2>
        <p>Una lista doble enlazada es una estructura de datos donde cada nodo tiene punteros al siguiente y al anterior nodo.</p>
        <img src="images/lista-doble.png" alt="Ejemplo de Lista Doble Enlazada">
    `);
});

document.getElementById('btnListaCircular').addEventListener('click', () => {
    showContent(`
        <h2>Lista Circular Enlazada</h2>
        <p>Una lista circular enlazada es una lista donde el último nodo apunta al primer nodo, formando un círculo.</p>
        <img src="images/lista-circular.png" alt="Ejemplo de Lista Circular Enlazada">
    `);
});

document.getElementById('btnSalir').addEventListener('click', () => {
    showContent(`<h2>Gracias por usar la aplicación.</h2>`);
});

// Manejador del botón "Volver al Menú"
document.getElementById('btnVolver').addEventListener('click', () => {
    hideContent();
});
