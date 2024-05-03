const express = require('express');
const router = express.Router();
const controllerMusic = require('../controller/musics');
const {random} = require('../controller/musics');

router.get("/", (req,res) => {
    res.status(200).json({success: "racine API"});
});

router.post('/', (req, res) => {
    res.status(200).json({ success: 'Bravo'});
});


router.get('/musics', controllerMusic.find);
router.post('/musics', controllerMusic.create);
router.get('/musics/random', random);
router.get('/musics/:id', controllerMusic.findById);

module.exports = router;