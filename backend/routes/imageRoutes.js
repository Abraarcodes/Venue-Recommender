const express = require('express');
const router = express.Router();
const { getVenueImage } = require('../scrapers/imageScraper');

router.get('/image', getVenueImage);

module.exports = router;
