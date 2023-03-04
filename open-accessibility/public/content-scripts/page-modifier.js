/*global chrome*/

import { dErr, dMsg } from "./util/debug.js";

import wordSpacing from "./features/word-spacing.js";

// Function called when a new message is received
const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  dMsg("Message received ");
  console.log(msg);

  if (!msg.action) {
    dErr("No action specified!");
  }

  switch (msg.action) {
    case "WORD_SPACING": {
      wordSpacing(msg.value);
      break;
    }
    default:
      dErr("Invalid action specified");
  }

  // Prepare the response object with information about the site
  const response = {
    title: document.title,
    message: "Hello World!",
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
