console.log("Hello from Station Simplon");
$(document).ready(function () {
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    onDragged: show,
  });

  let initMetro = 0;
  let intiWall = 0;
  const countSlide = document.querySelectorAll(".owl-item").length;
  function show(e) {
    const metro = document.querySelector("#metro");
    const wall = document.querySelector(".slideMetro");
    const direction = e.relatedTarget._drag.direction;
    if (direction === "left" && initMetro < 100 - 100 / countSlide) {
      initMetro += 100 / countSlide;
      intiWall += (100 / countSlide) * 2;
      console.log("position metro", initMetro);
    }
    if (direction === "right" && initMetro >= 0 + 100 / countSlide) {
      initMetro -= 100 / countSlide;
      intiWall -= (100 / countSlide) * 2;
      console.log("position metro", initMetro);
    }
    metro.style.left = `${initMetro}%`;
    wall.style.backgroundPosition = `${intiWall}% 0`;
  }
});
