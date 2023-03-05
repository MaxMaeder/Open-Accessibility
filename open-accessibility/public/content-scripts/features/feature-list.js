/*global chrome*/

import addAltText from "./image-classifier.js";
import desaturateColors from "./desaturate-colors.js";
import disableAnimations from "./disable-animations.js";
import dyslexiaRuler from "./dyslexia-ruler.js";
import dyslexicFont from "./dyslexic-font.js";
import emphasizeLinks from "./emphasize-links.js";
import fontSize from "./font-size.js";
import largeCursor from "./large-cursor.js";
import lineHeight from "./line-height.js";
import magnifier from "./magnifier.js";
import wordSpacing from "./word-spacing.js";

const FEATURE_LIST = {
  wordSpacing: {
    function: wordSpacing,
  },
  lineHeight: {
    function: lineHeight,
  },
  fontSize: {
    function: fontSize,
  },
  dyslexiaRuler: {
    function: dyslexiaRuler,
  },
  readingGuide: {
    function: magnifier,
  },
  emphasizeLinks: {
    function: emphasizeLinks,
  },
  largeCursor: {
    function: largeCursor,
  },
  imageCaptioning: {
    function: addAltText,
  },
  animation: {
    function: disableAnimations,
  },
  desaturate: {
    function: desaturateColors,
  },
  dyslexiaFonts: {
    function: dyslexicFont,
  },
  screenReader: {
    function: () => {},
  },
};

export default FEATURE_LIST;
