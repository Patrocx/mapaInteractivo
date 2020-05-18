var mapa; // Mapa que vamos a modificar

// Variable de la posicion inicial del mapa
var posicionCentral = {
  center: {lat: -26.8311783, lng: -65.2034609},
  zoom: 15,
}

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    
    mapa = new google.maps.Map(document.getElementById("map"), posicionCentral);

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
