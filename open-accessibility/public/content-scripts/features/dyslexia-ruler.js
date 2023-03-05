import { removeInj, updateCSS } from "../util/inject.js";

let enable = false;

let htmlInj;
let cssInj;

const CSS = `
#ruler {
  display: block;
  position: fixed;
  background-color: red;
  height: 2px;
  width: 100%;
  pointer-events: none;
}
`;

window.addEventListener("mousemove", (e) => {
  if (!enable) return;

  const mouseY = e.clientY;
  document.getElementById("ruler").style.top = mouseY + "px";
});

const dyslexiaRuler = (value) => {
  enable = value;

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

export default dyslexiaRuler;
