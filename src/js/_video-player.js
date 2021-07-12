export default class VideoPlayer {
  constructor(videoPlayer, iframePlaceholder, closeIcon, openBtns) {
    this.videoPlayer = videoPlayer;
    this.iframePlaceholder = iframePlaceholder;
    this.closeIcon = closeIcon;
    this.openBtns = openBtns;
    this.init();
  }

  async init() {
    this.closeIcon.addEventListener("click", this.closePlayer.bind(this));

    console.log(this.openBtns);

    this.openBtns.forEach((btn) => {
      btn?.addEventListener("click", this.openPlayer.bind(this));
    });
  }

  openPlayer(e) {
    const videoId = e.target.closest(".video-container").dataset.videoId;
    this.currentPlayer = new Vimeo.Player("video-player", {
      id: videoId,
      width: "100%",
    });

    document.addEventListener("keydown", (e) => {
      if (!e.key === "Escape") return;
      this.closePlayer();
    });

    this.videoPlayer.classList.remove("d-none");
  }

  async closePlayer() {
    this.videoPlayer.classList.add("d-none");
    await this.currentPlayer.pause();
    await this.currentPlayer.destroy();
    this.currentPlayer = null;
  }
}
