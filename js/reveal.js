class Reveal {
  reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
      let windowheight = window.innerHeight;
      let revealtop = reveal.getBoundingClientRect().top;
      let revealpoint = 75;

      if (revealtop < windowheight - revealpoint) {
        reveal.classList.add("reveal-active");
      } else {
        reveal.classList.remove("reveal-active");
      }
    });
  }
}
