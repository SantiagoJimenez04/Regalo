document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('photo-overlay').style.display = 'none';
});

document.getElementById('si-btn').addEventListener('click', function () {
    document.getElementById('photo-overlay').style.display = 'flex';
});

document.getElementById('no-btn').addEventListener('mouseover', function () {
    // Calcular posición aleatoria dentro del viewport
    let maxX = window.innerWidth - this.offsetWidth;
    let maxY = window.innerHeight - this.offsetHeight;
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    // Establecer posición aleatoria del botón
    this.style.position = 'fixed';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

document.getElementById('photo-overlay').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
