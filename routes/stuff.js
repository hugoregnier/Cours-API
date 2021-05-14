const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff')

// prends la requête du formulaire post 
router.post('/', stuffCtrl.createThing);

// modification le l'objet
router.put('/:id', stuffCtrl.modifyThing);

// suppression le l'objet
router.delete('/:id', stuffCtrl.deleteThing);

// url de l'id d'un seul produit (quand on clique sur le produit on arrive sur la page produit)
router.get('/:id', stuffCtrl.getOneThing);


// affiche tout les produits 
router.get('/', stuffCtrl.getAllThings);

module.exports = router;