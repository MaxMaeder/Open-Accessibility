import { removeInj, updateCSS } from "../util/inject.js";

const SPACINGS = ["1", "1.5", "2"];

let cssInj;

const lineHeight = (value) => {
  if (!Number.isInteger(value) || value < 0 || value > SPACINGS.length - 1) {
    cssInj = removeInj(cssInj);
    return;
  }

  const CSS = `
  * {
    line-height: ${SPACINGS[value]} !important;
  }
  `;

  cssInj = updateCSS(cssInj, CSS);
};

export default lineHeight;
