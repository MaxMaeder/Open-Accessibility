import dyslexiaRuler from "./dyslexia-ruler.js";
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
  MAGNIFIER: {
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
};

export default FEATURE_LIST;
