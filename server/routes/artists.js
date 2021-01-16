const express = require('express');
const router = express.Router();
const artistsController = require('../controllers/artists');

/** @route      GET /api/artists
 *  @desc       fetch all artists
 */
router.get('/', artistsController.getArtists);

/** @route      PUT /api/artists/:id
 *  @desc       toggle complete property of artist
 */
router.put('/:id', artistsController.toggleComplete);

module.exports = router;