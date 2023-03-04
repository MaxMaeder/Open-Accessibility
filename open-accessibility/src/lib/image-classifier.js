const apiKey = process.env.REACT_APP_IMAGGA_KEY;
const apiSecret = process.env.REACT_APP_IMAGGA_SECRET;

/**
 * Sends the image to an image classifier and returns expected alt text.
 * @param {String} imageUrl The url of the image to be classified
 */
export async function getAltText(imageUrl) {
  const endpoint = 'https://api.imagga.com/v2/tags?image_url=' + imageUrl;

  const options = {
    method: "GET",
    headers: {
      "Authorization": "Basic " + btoa(apiKey + ":" + apiSecret)
    },
  };

  async function getImageTag(endpoint, options) {
    const response = await fetch(endpoint, options);
    const data = await response.json();
    const tag = data.result.tags[0].tag.en;
    return "Image of a " + tag;
  }

  return await getImageTag(endpoint, options);
}