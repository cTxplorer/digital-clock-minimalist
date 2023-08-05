

function requestFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    document.addEventListener('keydown', exitFullscreen, false);
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    document.removeEventListener('keydown', exitFullscreen);
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) requestFullscreen();
  else exitFullscreen();
}

window.addEventListener('load', function () {

});