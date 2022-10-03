const moonPath =
  "M70 125C70 193.759 128.5 249.5 128.5 249.5C57.8075 249.5 0.5 193.759 0.5 125C0.5 56.2405 57.8075 0.5 128.5 0.5C128.5 0.5 70 56.2405 70 125Z";

const sunPath =
  "M256 124.5C256 193.259 198.692 249 128 249C57.3075 249 0 193.259 0 124.5C0 55.7405 57.3075 0 128 0C198.692 0 256 55.7405 256 124.5Z";

const darkMode = document.querySelector("#darkmode");
let toggle = false;

//need to click the sun

darkMode.addEventListener("click", () => {
  //anime .js used
  // const timeline = anime.timeline({
  //   duration: 1,
  //   easing: "easeOutExpo",
  // });
  //adding animation
  timeline
    .add({
      targets: ".sun",
      d: [{ value:toggle ? sunPath: moonPath }]
    })
    .add(
      {
        targets: darkMode,
        rotate: 300,
      },
      "-=550"
    )
    .add(
      {
        targets: "section",
        backgroundColor:toggle? "rgb(255,255,255)" : "rgb(22,22,22)",
      },
      "-=500"
    )
    .add(
      {
        targets: "h1",
        color: "rgb(999,999,999)",
      },
      "-=525"
    );

    //every time click on sun toglle changes
      if(!toggle){
        toggle=true;
      }else{
        toggle=false;
      }

});
