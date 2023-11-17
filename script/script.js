

// Função de inicialização do mapa
function initMap() {
    // Coordenadas iniciais para o centro do mapa
    const initialCoords = { lat: -33.867, lng: 151.195 };

    // Criação do mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        center: initialCoords,
        zoom: 15,
    });

    // Configuração de um evento de clique no mapa para adicionar marcadores
    setupClickListener(map);

    // Adiciona um ouvinte de eventos quando a API do Google Maps for carregada
    map.addListener("tilesloaded", () => {

        const yelpApiKey = 'XtjG783BnA-iqYLVKPurc4d0YSJuEL2QwlvBVqB6PmJ90oz8sVuUZCXU9qWBJLF33w6EGCU8RZyZ2pMGEquEB4iO57TkHpLHsr8MqfF9XM7xC6f92V92uZZKuNlWZXYx';
        const yelpApiUrl = 'http://localhost:3000/yelp'; // Use esta URL para a chamada CORS no seu servidor

        // Chama a API do Yelp
        fetch(`${yelpApiUrl}?location=americana`, {
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
    });
}

// Configuração de um evento de clique no mapa para adicionar marcadores
function setupClickListener(map) {
    map.addListener("click", (event) => {
        addMarker(event.latLng, map);
    });
}

// Adiciona um marcador ao mapa nas coordenadas especificadas
function addMarker(location, map) {
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Adiciona um ouvinte de eventos quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o mapa
    initMap();
});
