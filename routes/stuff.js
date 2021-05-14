const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// prends la requête du formulaire post 
router.post('/', auth, multer, stuffCtrl.createThing);

// modification le l'objet
router.put('/:id', auth, multer, stuffCtrl.modifyThing);

// suppression le l'objet
router.delete('/:id', auth, stuffCtrl.deleteThing);

// url de l'id d'un seul produit (quand on clique sur le produit on arrive sur la page produit)
router.get('/:id', auth, stuffCtrl.getOneThing);


// affiche tout les produits 
router.get('/', auth, stuffCtrl.getAllThings);

module.exports = router;