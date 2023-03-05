import { removeInj, updateCSS } from "../util/inject.js";

const SPACINGS = [0.75, 1.5];

let cssInj;

const wordSpacing = (value) => {
  if (!Number.isInteger(value) || value < 0 || value > SPACINGS.length - 1) {
    cssInj = removeInj(cssInj);
    return;
  }

  const CSS = `
  * {
    word-spacing: ${SPACINGS[value]}rem !important;
  }
  `;
  console.log(CSS);

  cssInj = updateCSS(cssInj, CSS);
};

export default wordSpacing;
