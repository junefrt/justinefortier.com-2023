let container = document.getElementById("anim-menu");
let animMenu;
let state = "menu";

animMenu = bodymovin.loadAnimation({
  container: container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '../json/anim-menu.json'
});

container.addEventListener("click", () => {
  if(state === 'menu') {
    animMenu.playSegments([0, 120], true);
        state = 'close';
      } else {
        animMenu.playSegments([120, 240], true);
        state = 'menu';
  }
});
