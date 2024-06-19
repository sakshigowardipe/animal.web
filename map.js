// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat:19.22747449897197 , lng: 72.97492006744825 };  
  const positio = {lat:  19.173317874717323 , lng: 72.83502145767143    };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
    animation:google.maps.Animation.Drop
  });
}

initMap();
