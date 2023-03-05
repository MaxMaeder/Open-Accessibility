/*global chrome*/

const getResource = async (path) => {
  return await chrome.runtime.sendMessage(path);
};

export default getResource;
