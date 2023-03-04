import { removeInj, updateCSS } from "../util/inject.js";

let enable = false;

let htmlInj;
let cssInj;

const CSS = `
#ruler {
  display: block;
  position: fixed;
  height: 40px;
  width: 100%;
  border: 1px black;
}
`;

window.addEventListener("mousemove", (e) => {
  if (!enable) return;

  const mouseY = e.clientY;
  document.getElementById("ruler").style.top = mouseY + "px";
});

const magnifier = (value) => {
  enable = value;
  if (value === 1) {
    enable = true;
  }

  if (enable) {
    htmlInj = document.createElement("div");
    htmlInj.id = "ruler";
    document.body.appendChild(htmlInj);

    htmlInj.cssInj = updateCSS(cssInj, CSS);
  } else {
    removeInj(htmlInj);
    removeInj(cssInj);
  }
};

export default magnifier;
