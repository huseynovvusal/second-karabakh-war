class Navbar {
  constructor(navbarLinks, navbarList, toggleBtn, navbar, sliderElment) {
    this.navbarLinks = navbarLinks;
    this.navbarList = navbarList;
    this.toggleBtn = toggleBtn;
    this.navbar = navbar;
    this.sliderElment = sliderElment;
  }

  navbarToggle() {
    this.navbarList.classList.toggle("active");
    this.toggleBtn.classList.toggle("toggle");
  }

  changeNavbarColor() {
    let scroll = window.scrollY;

    if (scroll > window.innerHeight / 2) {
      this.navbar.classList.add("nav-active");
    } else {
      this.navbar.classList.remove("nav-active");
    }

    if (scroll > window.innerHeight - window.innerHeight / 2.5) {
      this.sliderElment.classList.add("parallax");
    } else {
      this.sliderElment.classList.remove("parallax");
    }
  }

  addClickEventToLinks() {
    this.navbarLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        this.addActiveToLinks(e);
      });
    });
  }

  clearActiveFromLinks() {
    this.navbarLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  addActiveToLinks(element) {
    this.clearActiveFromLinks();
    element.classList.add("active");
    this.navbarList.classList.remove("active");
    this.toggleBtn.classList.remove("toggle");
  }

  changeSelectedLinkForScroll(first, second, third, last) {
    let sTop = second.getBoundingClientRect().top;
    let tTop = third.getBoundingClientRect().top;
    let lTop = last.getBoundingClientRect().top;

    if (sTop >= window.innerHeight / 2) {
      this.addActiveToLinks(this.navbarLinks[0]);
    }
    if (sTop <= window.innerHeight / 2) {
      this.addActiveToLinks(this.navbarLinks[1]);
    }
    if (tTop <= window.innerHeight / 2) {
      this.addActiveToLinks(this.navbarLinks[2]);
    }
    if (lTop <= window.innerHeight / 2) {
      this.addActiveToLinks(this.navbarLinks[3]);
    }
  }
}
