document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para los menús desplegables de desktop
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const dropdownMenu = this.nextElementSibling;

            // Cerrar otros menús desplegables abiertos
            dropdownToggles.forEach(function(otherToggle) {
                if (otherToggle !== toggle) {
                    otherToggle.nextElementSibling.style.display = 'none';
                }
            });

            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Funcionalidad para el cambio de imágenes en el carrusel
    let currentIndex = 0;
    const images = document.querySelectorAll('.image-movement img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3500); // Cambia de imagen cada 3.5 segundos

    const imageMovementDiv = document.querySelector('.image-movement');
    imageMovementDiv.addEventListener('mouseover', nextImage);

    // Funcionalidad del icono de chat
    const chatIcon = document.getElementById('chatIcon');
    const chatWindow = document.getElementById('chatWindow');

    if (chatIcon && chatWindow) {
        chatIcon.addEventListener('click', function() {
            chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Funcionalidad del menú para móviles
    const menuButton = document.getElementById('menuButton');
    const searchButton = document.getElementById('searchButton');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

    function closeAllMobileMenus() {
        mobileDropdownToggles.forEach(function(toggle) {
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.classList.remove('open');
        });
        const mobileSearch = document.getElementById('mobileSearch');
        mobileSearch.classList.remove('open');
    }

    if (menuButton) {
        menuButton.addEventListener('click', function() {
            closeAllMobileMenus();
            const navbarLower = document.getElementById('navbarLower');
            navbarLower.classList.toggle('open');
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', function() {
            closeAllMobileMenus();
            const mobileSearch = document.getElementById('mobileSearch');
            mobileSearch.classList.toggle('open');
        });
    }

    mobileDropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            closeAllMobileMenus();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('open');
        });
    });

    // Validación del formulario
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', function(event) {
            if (!userForm.checkValidity()) {
                event.preventDefault();
                alert('Por favor, complete todos los campos antes de enviar.');
            }
        });
    }
});