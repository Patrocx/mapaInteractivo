streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView
  var estaPosicion;

  // crea un panorama en una posición y lo muestra en la página.
  function inicializar () {
    if(marcadorModulo.existeMiMarcador()) {
      estaPosicion = marcadorModulo.damePosision();
    } else {
      estaPosicion = posicionCentral.center;
    }
    panorama = new google.maps.StreetViewPanorama( document.getElementById('pano'), {
      position: estaPosicion,
      pov: {
        heading: 70,
        pitch: -3,
        zoom: 0
      }
    });
    mapa.setStreetView(panorama);
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {

    panorama.setPosition(ubicacion);
    mapa.setStreetView(panorama)
    
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
