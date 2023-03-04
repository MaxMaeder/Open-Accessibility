import { injectCSS, removeInj } from "../util/inject.js";

const CSS = `
* {
  word-spacing: 1rem !important;
}
`;

let cssInj;

const wordSpacing = (enable) => {
  if (enable) {
    cssInj = injectCSS(CSS);
  } else {
    if (cssInj) {
      removeInj(cssInj);
    }
  }
};

export default wordSpacing;
