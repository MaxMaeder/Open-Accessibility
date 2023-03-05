import dyslexiaRuler from "./dyslexia-ruler.js";
import fontSize from "./font-size.js";
import addAltText from "./image-classifier.js";
import lineHeight from "./line-height.js";
import magnifier from "./magnifier.js";
import wordSpacing from "./word-spacing.js";

const FEATURE_LIST = {
  WORD_SPACING: {
    function: wordSpacing,
  },
  LINE_HEIGHT: {
    function: lineHeight,
  },
  FONT_SIZE: {
    function: fontSize,
  },
  DYSLEXIA_RULER: {
    function: dyslexiaRuler,
  },
  MAGNIFIER: {
    function: magnifier,
  },
  ADD_ALT_TEXT: {
    function: addAltText,
  },
};

export default FEATURE_LIST;
