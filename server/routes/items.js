const express = require('express'),
    router = express.Router(),
    { isLogin } = require('../middlewares/auth'),
    { add, list, getOne, update, remove } = require('../controllers/items');

/* GET items listing. */
router
    // .post('/add', isLogin, add)

    // .get('/all', list)

    // .get('/:id', getOne)

    // .put('/edit/:id', isLogin, update)

    // .delete('/delete/:id', isLogin, remove)

module.exports = router;
