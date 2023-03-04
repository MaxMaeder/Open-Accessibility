import dyslexiaRuler from "./dyslexia-ruler.js";
import fontSize from "./font-size.js";
import lineHeight from "./line-height.js";
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
};

export default FEATURE_LIST;
