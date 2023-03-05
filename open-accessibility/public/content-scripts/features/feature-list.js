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
  READING_GUIDE: {
    function: magnifier,
  },
  EMPHASIZE_LINKS: {
    function: emphasizeLinks,
  },
  COLOR_BLINDNESS: {
    function: emphasizeLinks,
  },
  LARGE_CURSOR: {
    function: largeCursor,
  },
  ADD_ALT_TEXT: {
    function: addAltText,
  },
  DISABLE_ANIMATIONS: {
    function: disableAnimations,
  },
  DESATURATE: {
    function: desaturateColors,
  },
  DYSLEXIA_FONTS: {
    function: dyslexicFont,
  },
};

export default FEATURE_LIST;
