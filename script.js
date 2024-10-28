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


window.onload = function() {

    const ctxEficacia = document.getElementById('graficoEficacia').getContext('2d');
    new Chart(ctxEficacia, {
        type: 'bar',
        data: {
            labels: ['Quantidade de cabelos perdidos', 'Aparência geral dos cabelos'],
            datasets: [
                {
                    label: 'Melhora',
                    data: [66, 69],
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                },
                {
                    label: 'Igual',
                    data: [34, 31],
                    backgroundColor: 'rgba(255, 168, 168, 0.7)',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%',
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Eficácia Clínica',
                    font: {
                      size: 16,
                    }
                }
            }
        }
    })
            
                  // Gráfico de Apreciabilidade Cosmética
    const ctxApreciabilidade = document.getElementById('graficoApreciabilidade').getContext('2d');
    new Chart(ctxApreciabilidade, {
        type: 'bar',
        data: {
            labels: [
                'Aumento na quantidade de cabelos',
                'Fios mais grossos',
                'Aumento no volume',
                'Fortalecimento dos fios',
                'Estímulo ao crescimento',
                'Bom resultado',
                'Compraria o produto'
            ],
            datasets: [
                {
                    label: 'Sim',
                    data: [84, 78, 81, 81, 84, 81, 81],
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                },
                {
                    label: 'Não',
                    data: [16, 22, 19, 19, 16, 19, 19],
                    backgroundColor: 'rgba(255, 168, 168, 0.7)',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: (value) => value + '%',
                    },
                },
                x: {
                    ticks: {
                        maxRotation: 90,
                        minRotation: 90,
                        callback: function(value) {
                            const words = this.getLabelForValue(value).split(' ');
                            return words.reduce((acc, word, index) => {
                                return acc + (index % 2 === 0 ? '\n' : ' ') + word;
                            })
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Avaliação de Aceitabilidade e Resultados Percebidos',
                    font: {
                      size: 16,
                    }
                }
            }
        }
    })
}
            