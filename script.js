let temp, start, stp, t, h, min, s, ms;

window.onload = function () {
  temp = document.getElementsByTagName("span");
  start = document.querySelector(".start");
  stp = document.querySelector(".stop");
  h = 0;
  min = 0;
  s = 0;
  ms = 0;
  t;
};

function compteur() {
  ms += 1;
  if (ms == 10) {
    ms = 1;
    s += 1;
  }

  if (s == 60) {
    s = 0;
    min += 1;
  }
  if (min == 60) {
    min = 0;
    h += 1;
  }

  temp[0].innerHTML = h + "h";
  temp[1].innerHTML = min + "min";
  temp[2].innerHTML = s + "s";
  temp[3].innerHTML = ms + "ms";
}

function commence() {
  t = setInterval(compteur, 100);
  start.disabled = true;
}

function arrete() {
  clearInterval(t);
  start.disabled = false;
}
function reset() {
  h = 0;
  min = 0;
  s = 0;
  ms = 0;

  clearInterval(t);
  start.disabled = false;

  temp[0].innerHTML = h + "h";
  temp[1].innerHTML = min + "min";
  temp[2].innerHTML = s + "s";
  temp[3].innerHTML = ms + "ms";
}
