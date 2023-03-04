/*global chrome*/

import { dErr, dMsg } from "./util/debug.js";

import FEATURE_LIST from "./features/feature-list.js";

// Function called when a new message is received
const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  dMsg("Message received ");
  console.log(msg);

  if (!msg.action) {
    dErr("No action specified!");
  }
  if (msg.value === undefined || msg.value === null) {
    dErr("No value specified!");
  }

  const feat = FEATURE_LIST[msg.action];
  if (!feat) {
    dErr("No feature found for specified action!");
  }
  feat.function(msg.value);

  sendResponse({});
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
