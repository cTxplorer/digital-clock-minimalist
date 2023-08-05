// timer
window.addEventListener('load', function () {
  const elemObject = {
    hour: document.getElementById('hour'),
    minute: document.getElementById('minute'),
    second: document.getElementById('second'),
  };

  const lastValueObject = {
    hour: null, minute: null, second: null
  }

  function setValue(elemId, value) {
    const lastValue = lastValueObject[elemId];
    if (value !== lastValue) {
      const elem = elemObject[elemId];
      lastValueObject[elemId] = value;
      elem.innerText = value.toString().padStart(2, '0');
    }
  }

  function tickClock() {
    const d = new Date();
    // hour
    let h = d.getHours() + 1;
    h = h > 12 ? h - 12 : h;
    setValue('hour', h);
    setValue('minute', d.getMinutes());
    setValue('second', d.getSeconds());
  }

  this.setInterval(tickClock, 500);
});

// Always-on screen
if ('wakeLock' in navigator) {
  window.addEventListener('load', async function () {
    let wakeLock = null;
    try {
      wakeLock = await navigator.wakeLock.request('screen');
    } catch (err) {
      console.err('Caught error:', err);
    }

    document.addEventListener("visibilitychange", async () => {
      if (wakeLock !== null && document.visibilityState === "visible") {
        wakeLock = await navigator.wakeLock.request("screen");
      }
    });
  });
}
