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
}
`;

window.addEventListener("mousemove", (e) => {
  console.log("hi");
  if (!enable) return;

  const mouseY = e.offsetY;
  console.log(mouseY);
  document.getElementById("ruler").style.top = mouseY + "px";
});

const dyslexiaRuler = (value) => {
  let enable = false;
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

export default dyslexiaRuler;
