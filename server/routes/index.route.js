const artists = require('./artists');

const express = require('express');
const router = express.Router();

router.use('/artists',artists);

module.exports = router;