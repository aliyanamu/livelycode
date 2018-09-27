const express = require('express'),
    router = express.Router(),
    { isLogin } = require('../middlewares/auth'),
    { add, list } = require('../controllers/tweets');

/* GET tweets listing. */
router
    .post('/add', isLogin, add)

    .get('/', list)

module.exports = router;
