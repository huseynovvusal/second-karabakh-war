window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  setTimeout(() => {
    document.body.classList.remove("o-hidden");
    document.querySelector(".loading").classList.add("disable");
  }, 2000);

  const navbarList = document.querySelector("nav ul");
  const navbarLinks = document.querySelectorAll("nav ul li a");
  const navbarElement = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");
  const sliderElement = document.querySelector(".slider");
  const musicBox = document.querySelector(".music-box");

  const navbar = new Navbar(
    navbarLinks,
    navbarList,
    hamburger,
    navbarElement,
    sliderElement
  );
  const reveal = new Reveal();
  const slider = new Slider(
    document.querySelector(".slider-items"),
    document.querySelectorAll(".controls div")
  );

  let musicBoxInterval = setInterval(() => {
    audio.alertMusicBox();
  }, 15000);

  const audio = new _Audio(
    document.querySelector("audio"),
    musicBox,
    musicBoxInterval
  );

  slider.slide();

  eventListeners();

  function eventListeners() {
    hamburger.addEventListener("click", () => navbar.navbarToggle());
    window.addEventListener("scroll", () => {
      reveal.reveal();
      navbar.changeNavbarColor();
      navbar.changeSelectedLinkForScroll(
        document.querySelector("#home"),
        document.querySelector("#war"),
        document.querySelector("#terror"),
        document.querySelector("#victory")
      );
      audio.setAudioVolume();
    });
    audio.addClickEventToMusicBox();
    slider.addClickEventToDots();
  }
});
