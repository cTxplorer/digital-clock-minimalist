// Add to home screen
var a2hsPromptEvent;
window.addEventListener('load', function () {
  const a2hsElem = document.getElementById('a2hs');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    a2hsElem.style.display = 'block';
    a2hsPromptEvent = e;
  });

  window.addToHomeScreen = function () {
    if (a2hsPromptEvent) {
      a2hsPromptEvent.prompt();
      a2hsPromptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          a2hsElem.style.display = 'none';
        }
      });
    }
  }

  window.dismissA2hsPrompt = function () {
    a2hsElem.style.display = 'none';
  }
});

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./pwa-sw.js')
            .then(function (register) {
                console.log('PWA service worker ready');
                register.update();
            })
            .catch(function (error) {
                console.log('Register failed! Error:' + error);
            });

        // Check user internet status (online/offline)
        function updateOnlineStatus(event) {
            if (!navigator.onLine) {
                alert('Internet access is not possible!')
            }
        }

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
    });
}