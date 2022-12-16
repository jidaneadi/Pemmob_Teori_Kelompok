const express = require('express');
const router = express.Router();

const role = require('../controller/role');

router.get('/', role.roleAll);
router.get('/:id', role.roleById);
router.post('/register', role.register);
router.put('/update/:id', role.update);
router.delete('/delete/:id', role.delRole);

module.exports = router;