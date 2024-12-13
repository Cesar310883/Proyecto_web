document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-info');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Buscar el párrafo con info nutricional más cercano
            const info = this.previousElementSibling; 
            // info es el <p class="info-nutricional oculto"> o visible, dependiendo del estado
            info.classList.toggle('oculto');

            // Cambiar el texto del botón según el estado
            if (info.classList.contains('oculto')) {
                this.textContent = 'Ver información nutricional';
            } else {
                this.textContent = 'Ocultar información nutricional';
            }
        });
    });
});
