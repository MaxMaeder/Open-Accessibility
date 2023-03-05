import { removeInj, updateCSS } from "../util/inject.js";

import font from "../../images/font.js";

let cssInj;

const CSS = `
  @font-face {
      font-family: 'dyslexic';
      src: url("${font}");
  }
  * {
    font-family: 'dyslexic' !important;
  }
`;

const dyslexicFont = (enabled) => {
  if (enabled) {
    cssInj = updateCSS(cssInj, CSS);
  } else {
    cssInj = removeInj(cssInj);
  }
};

export default dyslexicFont;
