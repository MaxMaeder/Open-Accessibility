/*global chrome*/

import { dErr, dMsg } from "./util/debug.js";

import FEATURE_LIST from "./features/feature-list.js";

let oldState = {};

// Function called when a new message is received
const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  dMsg("Message received ");
  console.log(msg);

  if (!msg.action) {
    dErr("No action specified!");
    return;
  }

  if (msg.action !== "STATE_UPDATED") {
    dErr("Invalid action specified!");
    return;
  }
  updateFeatures();

  sendResponse({});
};

const updateFeatures = async () => {
  const state = await chrome.storage.sync.get(null);

  for (let feat of Object.keys(state)) {
    if (
      typeof state === "object" &&
      JSON.stringify(oldState[feat]) === JSON.stringify(state[feat])
    )
      continue;
    if (typeof state !== "object" && oldState[feat] === state[feat]) continue;

    oldState[feat] = state[feat];
    const featState = state[feat];

    if (typeof featState === "object") {
      FEATURE_LIST[feat].function(featState.current);
    } else {
      FEATURE_LIST[feat].function(featState);
    }
  }
};
updateFeatures();

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
