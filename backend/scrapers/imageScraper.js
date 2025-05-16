// const puppeteer = require('puppeteer');

// async function getVenueImage(venueName, location) {
//   const query = encodeURIComponent(`${venueName} ${location} venue`);
//   const url = `https://www.google.com/search?tbm=isch&q=${query}`;

//   const browser = await puppeteer.launch({
//     headless: 'new', // use true if headless: 'new' throws error
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//   });

//   try {
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: 'networkidle2' });

//     // Wait for image grid
//     await page.waitForSelector('img');

//     // Get first valid image src (not base64)
//     const imageSrc = await page.evaluate(() => {
//       const images = Array.from(document.querySelectorAll('img'));
//       const src = images.map(img => img.src).find(s => s.startsWith('http'));
//       return src || null;
//     });

//     return imageSrc || null;
//   } catch (err) {
//     console.error('Puppeteer scraping error:', err);
//     return null;
//   } finally {
//     await browser.close();
//   }
// }

// module.exports = {getVenueImage};















const puppeteer = require('puppeteer');

async function getVenueImage(venueName, location) {
  const query = encodeURIComponent(`${venueName} ${location}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(mapsUrl, { waitUntil: 'networkidle2' });

    // Wait for photos to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Scrape Google Maps photos URLs
    const images = await page.evaluate(() => {
      const photoElements = Array.from(document.querySelectorAll('img[src^="https://lh3.googleusercontent.com"]'));
      const urls = photoElements
        .map(img => img.src)
        .filter((src, i, arr) => src && !src.includes('data:') && arr.indexOf(src) === i);
      return urls;
    });

    return images.length ? images : null;

  } catch (err) {
    console.error('Error scraping Google Maps images:', err);
    return null;
  } finally {
    await browser.close();
  }
}

module.exports = {getVenueImage};




















































