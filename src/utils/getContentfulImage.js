import serializeObject from './serializeObject';

/**
 * Takes an image URL from contentful and appends any options for image
 * manipulation. Reference:
 * https://www.contentful.com/developers/docs/references/images-api/
 * @param {string} url
 * @param {Object} options
 */
function getContentfulImage(url, options = {}) {
  // Check that this is actually a contentful image.
  if (url.indexOf('images.ctfassets.net') < 0) {
    return url;
  }

  let finalUrl = url;

  // Contentful images generally come without the protocol.
  if (!finalUrl.indexOf('https:') !== 0) {
    finalUrl = `https:${url}`;
  }

  // Add any url parameters for modifying the image. Reference:
  // https://www.contentful.com/developers/docs/references/images-api/
  if (Object.keys(options).length) {
    const params = serializeObject(options);
    finalUrl += (finalUrl.indexOf('?') === -1 ? '?' : '&') + params;
  }
  return finalUrl;
}

export default getContentfulImage;
