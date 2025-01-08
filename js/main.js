const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});

let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
