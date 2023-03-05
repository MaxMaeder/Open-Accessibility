//import { createPopper } from "../lib/popper.min.js";

// const apiKey = process.env.REACT_APP_IMAGGA_KEY;
// const apiSecret = process.env.REACT_APP_IMAGGA_SECRET;

import { removeInj, updateCSS } from "../util/inject.js";

import { apiKey, apiSecret } from './image-classifier.js';

let cssInj;

/**
 * Sends the image to an image classifier and returns expected alt text.
 * @param {String} imageUrl The url of the image to be classified
 */
async function getAltText(imageUrl) {
  const endpoint = 'https://api.imagga.com/v2/tags?image_url=' + imageUrl;

  const options = {
    method: "GET",
    headers: {
      "Authorization": "Basic " + btoa(apiKey + ":" + apiSecret)
    },
  };

  async function getImageDescription(endpoint, options) {
    const response = await fetch(endpoint, options);
    const data = await response.json();
    const tag = data.result.tags[0].tag.en;
    return "Image of a " + tag;
  }

  return await getImageDescription(endpoint, options);
}

/**
 * Adds alt texts to all images
 * @param {Integer} showToolTip 1: adds popper alt texts, 0: doesnt
 */
const addAltText = (showToolTip) => {
  const imagesWithoutAltText = document.querySelectorAll("img:not([alt])");

  imagesWithoutAltText.forEach((img) => {
    if (img.width < 200 && img.height < 200) {
      console.log("Image too small, skipping.");
      return;
    }

    let timeoutId;

    const callGetAltText = async () => {
      clearTimeout(timeoutId);
      const altText = await getAltText(img.src);
      img.alt = altText;
      console.log(altText);

      if (showToolTip === 1) {
        const tooltip = document.createElement("p");
        tooltip.classList.add("tooltip");
        tooltip.innerText = altText;
        tooltip.style.backgroundColor = "#FFFFFF";
        document.body.appendChild(tooltip);
        Popper.createPopper(img, tooltip, {
          placement: "top",
        });
      }
    };

    timeoutId = setTimeout(callGetAltText, 500);
  });
}

export default addAltText;