
const yelpApiKey = 'XtjG783BnA-iqYLVKPurc4d0YSJuEL2QwlvBVqB6PmJ90oz8sVuUZCXU9qWBJLF33w6EGCU8RZyZ2pMGEquEB4iO57TkHpLHsr8MqfF9XM7xC6f92V92uZZKuNlWZXYx';
const yelpApiUrl = 'http://localhost:3000/yelp';

// Função para buscar dados do Yelp
function fetchYelpData(location) {
    fetch(`${yelpApiUrl}?location=${location}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${yelpApiKey}`,
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erro ao chamar a API do Yelp:', error);
    });
}

// Adiciona um ouvinte de eventos quando a API do Google Maps for carregada
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o mapa
    initMap();

    // Obtém a referência do mapa
    const map = new google.maps.Map(document.getElementById("map"));

    // Configura um ouvinte de eventos de clique no mapa
    setupClickListener(map);

    // Adiciona um ouvinte para a caixa de pesquisa
    const input = document.getElementById("pac-input");
    input.addEventListener("keypress", async function (event) {
        if (event.key === 'Enter') {
            const locationName = input.value;
            fetchYelpData(locationName);
        }
    });
});
