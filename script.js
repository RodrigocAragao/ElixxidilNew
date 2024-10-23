let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function moveSlide(step) {
    // Remove a classe ativa do item atual
    items[currentIndex].classList.remove('active');

    // Atualiza o índice
    currentIndex = (currentIndex + step + totalItems) % totalItems;

    // Adiciona a classe ativa ao novo item
    items[currentIndex].classList.add('active');

    // Mover o carrossel
    const carousel = document.querySelector('.carousel');
    const translateXValue = -currentIndex * 100; // Cada slide ocupa 100% da largura
    carousel.style.transform = `translateX(${translateXValue}%)`;
}
