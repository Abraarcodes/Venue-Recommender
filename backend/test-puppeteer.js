const { getVenueImage } = require('./scrapers/imageScraper');

async function test() {
  const venueName = 'Eiffel Tower';
  const location = 'Paris';

  const imageUrl = await getVenueImage(venueName, location);

  if (imageUrl) {
    console.log('Image URL:', imageUrl);
  } else {
    console.log('No image found.');
  }
}

test();
