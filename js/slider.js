class Slider {
  constructor(sliderItems, sliderDots) {
    this.index = 0;
    this.sliderItems = sliderItems;
    this.sliderDots = sliderDots;
  }

  slide() {
    setInterval(() => {
      if (this.index < 75) {
        this.index += 25;
      } else {
        this.index = 0;
      }

      this.dotChanged();
    }, 5000);
  }

  dotChanged() {
    this.sliderItems.style.transform = `translateX(-${this.index}%)`;
    this.sliderDots.forEach((dot) => {
      dot.classList.remove("active");
    });
    this.sliderDots[this.index / 25].classList.add("active");
  }

  addClickEventToDots() {
    this.sliderDots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        this.dotClicked(e);
      });
    });
  }

  dotClicked(e) {
    this.index = e.target.id * 25;
    this.dotChanged();
  }
}
