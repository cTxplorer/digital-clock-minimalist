// Add to home screen
var a2hsPromptEvent;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  a2hsPromptEvent = e;
  document.getElementById('a2hs').style.display = 'block';
});

window.addToHomeScreen = function () {
  if (a2hsPromptEvent) {
    a2hsPromptEvent.prompt();
    a2hsPromptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        document.getElementById('a2hs').style.display = 'none';
      }
    });
  }
}

window.dismissA2hsPrompt = function () {
  document.getElementById('a2hs').style.display = 'none';
}
