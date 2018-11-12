"use strict";

// function init_map() {
//   var myOptions = {
//     zoom: 12,
//     center: new google.maps.LatLng(51.3242659, 6.894416200000023),
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     styles: [{
//         elementType: "geometry",
//         stylers: [{
//           color: "#485167"
//         }]
//       },
//       {
//         elementType: "labels.text.stroke",
//         stylers: [{
//           color: "#242f3e"
//         }]
//       },
//       {
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#746855"
//         }]
//       },
//       {
//         featureType: "administrative.locality",
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#ffffff"
//         }]
//       },
//       {
//         featureType: "poi",
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#d59563"
//         }]
//       },
//       {
//         featureType: "poi.park",
//         elementType: "geometry",
//         stylers: [{
//           color: "#686867"
//         }]
//       },
//       {
//         featureType: "poi.park",
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#686867"
//         }]
//       },
//       {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [{
//           color: "#21abe3"
//         }]
//       },
//       {
//         featureType: "road",
//         elementType: "geometry.stroke",
//         stylers: [{
//           color: "#212a37"
//         }]
//       },
//       {
//         featureType: "road",
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#9ca5b3"
//         }]
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry",
//         stylers: [{
//           color: "#21abe3"
//         }]
//       },
//       {
//         featureType: "road.highway",
//         elementType: "geometry.stroke",
//         stylers: [{
//           color: "#1f2835"
//         }]
//       },
//       {
//         featureType: "road.highway",
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#f3d19c"
//         }]
//       },
//       {
//         featureType: "transit",
//         elementType: "geometry",
//         stylers: [{
//           color: "#2f3948"
//         }]
//       },
//       {
//         featureType: "transit.station",
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#d59563"
//         }]
//       },
//       {
//         featureType: "water",
//         elementType: "geometry",
//         stylers: [{
//           color: "#17263c"
//         }]
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.fill",
//         stylers: [{
//           color: "#515c6d"
//         }]
//       },
//       {
//         featureType: "water",
//         elementType: "labels.text.stroke",
//         stylers: [{
//           color: "#17263c"
//         }]
//       }
//     ]
//   };
//   let map = new google.maps.Map(
//     document.getElementById("gmap_canvas"),
//     myOptions
//   );
//   let marker = new google.maps.Marker({
//     map: map,
//     animation: google.maps.Animation.DROP,
//     position: new google.maps.LatLng(51.3242659, 6.894416200000023)
//   });
//   marker.addListener("click", toggleBounce);

//   function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//       marker.setAnimation(null);
//     } else {
//       marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
//   }
//   let infowindow = new google.maps.InfoWindow({
//     content: "<h1>Con2Cus GmbH<br> ALLSCHEIDT 8B<br> 40883 RATINGEN</h1>"
//   });
//   google.maps.event.addListener(marker, "click", function () {
//     infowindow.open(map, marker);
//   });
//   infowindow.open(map, marker);
// }
// google.maps.event.addDomListener(window, "load", init_map);

function showNav() {
  document.addEventListener("DOMContentLoaded", function () {
    var hero = document.querySelector(".hero");

    var dots = document.querySelector(".dots");
    dots.classList.add("invisible");
    var dimensions = hero.getBoundingClientRect();

    var height = dimensions.height;

    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (scrollTop >= height / 2) {
        dots.classList.remove("invisible");

        dots.classList.add("visible");
      } else {
        dots.classList.remove("visible");

        dots.classList.add("invisible");
      }
    });
  });
}
showNav();

enterView({
  selector: ".LR",

  enter: function enter(el) {
    el.classList.add("fade-in-bottom");
  },
  exit: function exit(el) {
    el.classList.remove("fade-in-bottom");
  }
});
enterView({
  selector: ".RL",
  enter: function enter(el) {
    el.classList.add("fade-in-top");
  },
  exit: function exit(el) {
    el.classList.remove("fade-in-top");
  }
});

enterView({
  selector: ".UP",
  enter: function enter(el) {
    el.classList.add("bounce-in-bottom");
  },
  exit: function exit(el) {
    el.classList.remove("bounce-in-bottom");
  }
});
enterView({
  selector: "ul",
  enter: function enter(el) {
    el.classList.add("current");
  },
  exit: function exit(el) {
    el.classList.remove("current");
  }
});