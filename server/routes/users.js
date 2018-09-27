const express = require('express'),
    router = express.Router(),
    { getSelf } = require('../middlewares/auth'),
    { list, register, login } = require('../controllers/users')

/* GET users listing. */
router
    .get('/', list)

    .post('/register', register)

    .post('/login', login)

    .get('/self', getSelf)

module.exports = router
