/*global chrome*/

(async () => {
  const src = chrome.runtime.getURL("content-scripts/page-modifier.js");
  const contentScript = await import(src);
})();
