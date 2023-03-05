import { removeInj, updateCSS } from "../util/inject.js";

import pointer from "../assets/pointer.js";

let enable = false;

let htmlInj;
let cssInj;

const CSS = `
#cursor {
  position: fixed;
  z-index: 100000;
  height: 50px;
  aspect-ratio: 1;
  pointer-events: none;
  cursor: none;
}
`;

window.addEventListener("mousemove", (e) => {
  if (!enable) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  document.getElementById("cursor").style.top = mouseY - 5 + "px";
  document.getElementById("cursor").style.left = mouseX - 12 + "px";
});

const largeCursor = async (value) => {
  enable = value;
  if (value === 1) {
    enable = true;
  }
  console.log(value);
  console.log(enable);

  if (enable) {
    htmlInj = document.createElement("img");
    htmlInj.src = pointer;
    htmlInj.id = "cursor";
    document.body.appendChild(htmlInj);

    cssInj = updateCSS(cssInj, CSS);

    document.body.style.cursor = "none !important";
  } else {
    htmlInj = removeInj(htmlInj);
    cssInj = removeInj(cssInj);

    document.body.style.cursor = "none !important";
    //document.body.style.cursor = "unset";
  }
};

export default largeCursor;
