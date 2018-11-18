const router = require('express').Router();
const { Album, Artist, Song } = require('../db');

// connect your API routes here!

router.get('/albums', async (req, res, next) => {
  try {
    const albums = await Album.findAll({ include: Artist });
    res.send(albums);
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/albums/:albumId', async (req, res, next) => {
  try {
    const albumId = req.params.albumId;
    const thisAlbum = await Album.findById(albumId, {
      include: [Artist, Song],
    });
    res.send(thisAlbum);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
