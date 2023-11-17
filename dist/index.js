"use strict";
document.addEventListener("DOMContentLoaded", function () {
    initMap();
});
function initMap() {
    // Configuração do mapa do Google Maps
    var map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.867, lng: 151.195 },
        zoom: 15,
    });
    // Adiciona um marcador no mapa
    var marker = new window.google.maps.Marker({
        map: map,
        position: { lat: -33.867, lng: 151.195 },
    });
}
function rollDice() {
    // Limpa todas as classes ativas
    var diceFaces = document.querySelectorAll(".dice-face");
    diceFaces.forEach(function (face) {
        face.classList.remove("active");
    });
    // Gera um número aleatório de 1 a 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    // Adiciona a classe ativa à face correspondente
    var activeFace = document.getElementById(randomNumber.toString());
    if (activeFace) {
        activeFace.classList.add("active");
    }
}
