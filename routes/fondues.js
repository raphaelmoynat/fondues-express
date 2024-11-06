const { Router } = require('express');
const router = Router();
const {index, create, update, remove, show} = require('../controllers/fondues');


router.get('/', index);
router.post('/create', create);
router.get('/fondues/:id', show);
router.put('/update/:id', update)
router.delete('/delete/:id', remove);


module.exports = router;