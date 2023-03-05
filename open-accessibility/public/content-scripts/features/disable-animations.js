import { removeInj, updateCSS } from "../util/inject.js";

let cssInj;

const CSS = `
  * {
    transition: none !important;
    animation: none !important;
  }
`;

const disableAnimations = (enabled) => {
  if (enabled) {
    cssInj = updateCSS(cssInj, CSS);
  } else {
    cssInj = removeInj(cssInj);
  }
};

export default disableAnimations;
