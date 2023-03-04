const updateCSS = (inj, css) => {
  let el = inj ? inj : document.createElement("style");
  el.type = "text/css";
  el.innerText = css;
  if (!inj) document.head.appendChild(el);
  return el;
};

const removeInj = async (inj) => {
  if (!inj || !inj.parentElement) return;

  inj.parentElement.removeChild(inj);
};

export { updateCSS, removeInj };
