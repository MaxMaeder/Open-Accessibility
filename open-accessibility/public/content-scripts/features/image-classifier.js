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
    console.log("Classified image. Found: " + tag);

    let article = "a";
    if (tag[0] === "a" || tag[0] === "e" || tag[0] === "i" || tag[0] === "o" || tag[0] === "u") {
      article = article + "n";
    }
    return "Image of " + article + " " + tag;
  }

  return await getImageDescription(endpoint, options);
}

/**
 * Adds alt texts to all images
 * @param {boolean} showToolTip True: adds popper alt texts, False: doesnt
 */
const addAltText = (showToolTip) => {
  let displayingToolTips = false;

  if (showToolTip === 1 || showToolTip === true) {
    displayingToolTips = true;
  }

  console.log("displaying tool tips: " + displayingToolTips);
  // const imagesWithoutAltText = document.querySelectorAll("img[alt=''], img:not([alt])");
  const allImages = document.querySelectorAll("img");

  const hasRunBefore = document.querySelectorAll("p.IMAGE_CLASSIFIER_tooltip").length !== 0;

  if (!hasRunBefore) {
    allImages.forEach((img) => {
      if (img.width < 100 && img.height < 100) {
        console.log("Image too small, skipping.");
        return;
      }

      if (img.alt) {
        console.log("Image has alt text: " + img.alt);

        let caption = img.alt;
        if (img.alt.length > 50) {
          caption = img.alt.substring(0, 50) + "...";
        }

        const tooltip = document.createElement("p");
        tooltip.classList.add("IMAGE_CLASSIFIER_tooltip");
        tooltip.innerText = caption;
        tooltip.style.backgroundColor = "#FFFF00";
        tooltip.style.fontWeight = "bold";
        tooltip.style.padding = "0.5em";
        if (displayingToolTips === false) {
          tooltip.style.visibility = "hidden";
        } else if (displayingToolTips === true) {
          tooltip.style.visibility = "visible";
        }
        document.body.appendChild(tooltip);

        Popper.createPopper(img, tooltip, {
          placement: "top",
        });
      } else {
        console.log("Image does not have alt text.");

        const callGetAltText = async () => {
          const altText = await getAltText(img.src);
          img.alt = altText;
          console.log(altText);

          if (img.alt !== "") {
            const tooltip = document.createElement("p");
            tooltip.classList.add("IMAGE_CLASSIFIER_tooltip");
            tooltip.innerText = img.alt;
            tooltip.style.backgroundColor = "#FFFF00";
            tooltip.style.fontWeight = "bold";
            tooltip.style.padding = "0.5em";
            if (displayingToolTips === false) {
              tooltip.style.visibility = "hidden";
            } else if (displayingToolTips === true) {
              tooltip.style.visibility = "visible";
            }
            document.body.appendChild(tooltip);

            Popper.createPopper(img, tooltip, {
              placement: "top",
            });
          }
        };

        callGetAltText();
      }
    });
  }

  if (hasRunBefore) {
    const imagesWithToolTips = document.querySelectorAll("p.IMAGE_CLASSIFIER_tooltip");

    console.log("Changing visibility to " + displayingToolTips);

    imagesWithToolTips.forEach(element => {
      if (displayingToolTips === false) {
        element.style.visibility = "hidden";
      } else if (displayingToolTips === true) {
        element.style.visibility = "visible";
      }
    })
  }
}

export default addAltText;