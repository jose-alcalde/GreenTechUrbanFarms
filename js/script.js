document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar el mapa con Leaflet.js
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([40.416775, -3.703790], 6); // Centrando el mapa en España
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marcadores de proyectos
    L.marker([41.3851, 2.1734]).addTo(map).bindPopup('Proyecto en Barcelona');
    L.marker([37.9922, -1.1307]).addTo(map).bindPopup('Proyecto en Murcia');
});

