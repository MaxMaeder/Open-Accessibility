/*global chrome*/

// Function called when a new message is received
const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  
   console.log('[content.js]. Message received', msg);

 
    // Prepare the response object with information about the site
   const response = {
       title: document.title,
       message: "Hello World!"
   };
 
   sendResponse(response);
}
 
/**
* Fired when a message is sent from either an extension process or a content script.
*/
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);