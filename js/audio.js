class _Audio {
  constructor(audio, musicBox, interval) {
    this.audio = audio;
    this.musicBox = musicBox;
    this.musicPlayed = false;
    this.interval = interval;
  }

  addClickEventToMusicBox() {
    this.musicBox.addEventListener("click", () => {
      this.audio.play();
      this.setAudioVolume();
      this.musicPlayed = true;
    });
  }

  alertMusicBox() {
    if (!this.musicPlayed) {
      this.musicBox.classList.add("active");

      setTimeout(() => {
        this.musicBox.classList.remove("active");
      }, 5000);
    } else {
      clearInterval(this.interval);
    }
  }

  setAudioVolume() {
    let volume = (window.scrollY + 100) / 1000;
    if (volume <= 1) {
      this.audio.volume = volume;
    } else {
      this.audio.volume = 1;
    }
  }
}
