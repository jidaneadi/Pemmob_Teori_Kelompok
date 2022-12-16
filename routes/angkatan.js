const express = require('express');
const router  = express.Router();

const angkatan = require('../controller/angkatan');

router.get('/', angkatan.getAngkatan);
router.get('/:id', angkatan.getID);
router.post('/register',angkatan.register);
router.put('/update/:id', angkatan.updateData);
router.delete('/delete/:id', angkatan.delData);


module.exports = router;