import { removeInj, updateCSS } from "../util/inject.js";

const MAG_HEIGHT = 80;

let enable = false;

let htmlInj1;
let htmlInj2;
let cssInj;

const CSS = `
#top-mag, #bottom-mag {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}
#top-mag {
  top: 0;
  border-bottom: 2px solid black;
}
#bottom-mag {
  bottom: 0;
  border-top: 2px solid black;
}
`;

window.addEventListener("mousemove", (e) => {
  if (!enable) return;

  const mouseY = e.clientY;

  const topH = mouseY - MAG_HEIGHT / 2;
  const bottomH = window.innerHeight - mouseY - MAG_HEIGHT / 2;

  document.getElementById("top-mag").style.height = topH + "px";
  document.getElementById("bottom-mag").style.height = bottomH + "px";
});

const magnifier = (value) => {
  enable = value;
  if (value === 1) {
    enable = true;
  }

  if (enable) {
    htmlInj1 = document.createElement("div");
    htmlInj1.id = "top-mag";
    document.body.appendChild(htmlInj1);

    htmlInj2 = document.createElement("div");
    htmlInj2.id = "bottom-mag";
    document.body.appendChild(htmlInj2);

    cssInj = updateCSS(cssInj, CSS);
  } else {
    removeInj(htmlInj1);
    removeInj(htmlInj2);
  }
};

export default magnifier;
