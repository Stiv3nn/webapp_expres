// IMPORTIAMO EXPRESS
const express = require('express');
// RICHIAMIAMO IL ROUTER
const router = express.Router();

// IMPORTIAMO IL MIDDLEWARE DELLA GESTIONE FILE
const upload = require('../middlewares/multer');

// IMPORTIAMO I CONTROLLER
const movieController = require("../controllers/moviesController");

// ROTTE

//INDEX
router.get('/', movieController.index);
// SHOW
router.get('/:id', movieController.show);
// STORE REVIEW (INSERIMENTO DI NUOVI DATI)
router.post('/:id/reviews', movieController.storeReview);
// STORE MOVIE 
router.post('/', upload.single('image'), movieController.store);







// ESPORTIAMO IL MODULO
module.exports = router;