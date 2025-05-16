const express = require('express');
const router = express.Router();
const { getVenues } = require('../controllers/venueController');

router.post('/', getVenues);

module.exports = router;
