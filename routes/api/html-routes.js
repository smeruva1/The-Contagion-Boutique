const router = require('express').Router();

const { getBurgers } = require('../../controllers/');

router.get('/', (req, res) => {
    getBurgers()
        .then(burgerdata => {
            res.render('home', { burgers: burgerdata });
        })
        .catch(err => {
            res.status(500).end();
        });
});

module.exports = router;