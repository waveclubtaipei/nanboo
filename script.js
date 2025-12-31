const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const video = invitation.querySelector(".alpha-video");

openBtn.onclick = () => {
  cover.classList.add("hidden");
  invitation.classList.remove("hidden");

  // 確保影片播放（手機需要觸發）
  video.play();
};
