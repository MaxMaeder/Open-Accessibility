const injectCSS = (css) => {
  let el = document.createElement("style");
  el.type = "text/css";
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};

const removeInj = async (el) => {
  el.parentElement.removeChild(el);
};

export { injectCSS, removeInj };
