import { apiKey, apiSecret } from './image-classifier-keys.js';

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
    const tag = await data.result.tags[0].tag.en;
    return "Image of a " + tag;
  }

  return await getImageDescription(endpoint, options);
}

/**
 * Adds alt texts to all images
 * @param {Integer} showToolTip 1: adds popper alt texts, 0: doesnt
 */
const addAltText = (showToolTip) => {
  let displayingToolTips = false;

  if (showToolTip === 1 || showToolTip === true) {
    displayingToolTips = true;
  }

  console.log("displaying tool tips: " + displayingToolTips);

  const imagesWithoutAltText = document.querySelectorAll("img[alt=''], img:not([alt])");

  const hasRunBefore = document.querySelectorAll("p.IMAGE_CLASSIFIER_tooltip").length !== 0;

  if (!hasRunBefore) {
    imagesWithoutAltText.forEach((img) => {
      if (img.width < 200 && img.height < 200) {
        console.log("Image too small, skipping.");
        return;
      }

      let timeoutId;

      const callGetAltText = async () => {
        const altText = await getAltText(img.src);
        img.alt = altText;
        console.log(altText);

        const tooltip = document.createElement("p");
        tooltip.classList.add("IMAGE_CLASSIFIER_tooltip");
        tooltip.innerText = altText;
        tooltip.style.backgroundColor = "#FFFF00";
        tooltip.style.fontWeight = "bold";
        tooltip.style.padding = "0.5em";
        if (displayingToolTips === 0) {
          tooltip.style.visibility = "hidden";
        } else if (displayingToolTips === 1) {
          tooltip.style.visibility = "visible";
        }
        document.body.appendChild(tooltip);

        Popper.createPopper(img, tooltip, {
          placement: "top",
        });
      };

      timeoutId = setTimeout(callGetAltText, 500);
    });
  }

  if (hasRunBefore) {
    const imagesWithToolTips = document.querySelectorAll("p.IMAGE_CLASSIFIER_tooltip");

    console.log("Changing visibility to " + displayingToolTips);

    imagesWithToolTips.forEach(element => {
      if (displayingToolTips === 0) {
        element.style.visibility = "hidden";
      } else if (displayingToolTips === 1) {
        element.style.visibility = "visible";
      }
    })
  }
}

export default addAltText;