import { removeInj, updateCSS } from "../util/inject.js";

let cssInj;

const CSS = `
  * {
    filter: grayscale(40%);
  }
`;

const desaturateColors = (enabled) => {
  if (enabled) {
    cssInj = updateCSS(cssInj, CSS);
  } else {
    cssInj = removeInj(cssInj);
  }
};

export default desaturateColors;
