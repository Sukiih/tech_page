document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navbar-nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validación del form
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        let isValid = true;

        if (nombre === '') {
            alert('Por favor, ingresa tu nombre.');
            isValid = false;
        }

        if (email === '' || !validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            isValid = false;
        }

        if (mensaje === '') {
            alert('Por favor, ingresa tu mensaje.');
            isValid = false;
        }

        if (isValid) {
            alert('Formulario enviado con éxito!');
            form.reset(); // Reiniciar el formulario
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
