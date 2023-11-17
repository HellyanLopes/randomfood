// script.js

function initMap() {
    const initialCoords = { lat: -33.867, lng: 151.195 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: initialCoords,
        zoom: 15,
    });

    // Adiciona a caixa de pesquisa
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Atualiza o centro do mapa com base na seleção da caixa de pesquisa
    map.addListener("bounds_changed", function () {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    // Configura um ouvinte de eventos de clique no mapa
    map.addListener("click", function (event) {
        addMarker(event.latLng, map);
    });

    // Atualiza os marcadores quando a caixa de pesquisa é usada
    searchBox.addListener("places_changed", function () {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Remove marcadores antigos
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // Adiciona marcadores para os lugares encontrados
        const bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry || !place.geometry.location) {
                console.log("Local sem coordenadas:", place);
                return;
            }

            markers.push(
                new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            bounds.extend(place.geometry.location);
        });

        // Ajusta o zoom para incluir todos os marcadores
        map.fitBounds(bounds);

        // Tratamento de erro
        if (markers.length === 0) {
            console.error("Nenhum lugar encontrado. Por favor, tente novamente.");
            // Adicione um feedback visual ao usuário, se necessário
        }
    });
}

function addMarker(location, map) {
    new google.maps.Marker({
        position: location,
        map: map,
    });
}
