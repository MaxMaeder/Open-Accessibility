/*global chrome*/

/**
 * Sends a message to the content scripts running on the current page
 * @param {*} msg the message, as a JS object
 * @returns the response message from the page, if one was sent
 */
const sendMsg = async (msg) => {
  if (!chrome.tabs) {
    console.error("Can't find chrome.tabs, will not send msg");
    return;
  }

  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  return await chrome.tabs.sendMessage(
    // Current tab ID
    tabs[0].id || 0,

    // Message
    msg
  );
};

export { sendMsg };
/*
// Get urls for content scripts
function on_message(message, sender, sendResponse) {
  console.log("got message");
  console.log(message);

  chrome.runtime.getURL(message).then((url) => sendResponse(url));

  return true;
}

chrome.runtime.onMessage.addListener(on_message);
*/
