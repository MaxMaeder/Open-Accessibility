import { removeInj, updateCSS } from "../util/inject.js";

let cssInj;

const CSS = `
  a {
    background-color: black !important;
    text-decoration: underline !important;
    color: yellow !important;
    font-weight: bold !important;
  }
`;

const emphasizeLinks = (enabled) => {
  if (enabled) {
    cssInj = updateCSS(cssInj, CSS);
  } else {
    cssInj = removeInj(cssInj);
  }
};

export default emphasizeLinks;
