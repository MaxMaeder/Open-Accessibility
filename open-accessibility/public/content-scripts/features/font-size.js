import { removeInj, updateCSS } from "../util/inject.js";

const SPACINGS = ["20px", "25px", "30px", "35px"];

let cssInj;

const fontSize = (value) => {
  if (!Number.isInteger(value) || value < 0 || value > SPACINGS.length - 1) {
    cssInj = removeInj(cssInj);
    return;
  }

  const CSS = `
  p {
    font-size: ${SPACINGS[value]} !important;
  }
  `;
  console.log(CSS);

  cssInj = updateCSS(cssInj, CSS);
};

export default fontSize;
