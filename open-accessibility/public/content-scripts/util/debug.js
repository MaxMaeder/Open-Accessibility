const ENABLE_DEBUG = true;

const dMsg = (msg) => {
  if (!ENABLE_DEBUG) return;

  console.log("[Modifier] " + msg);
};

const dErr = (msg) => {
  if (!ENABLE_DEBUG) return;

  console.error("[Modifier] " + msg);
};

export { dMsg, dErr };
