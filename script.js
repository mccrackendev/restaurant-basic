// Initialize and add the map
function initMap() {
  // The location of Uluru
  const address = { lat: 47.59918087749341, lng: -122.35530958772404 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: address,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: address,
    map: map,
  });
}

window.initMap = initMap;
