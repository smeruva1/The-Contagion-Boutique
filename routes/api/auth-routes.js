const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { User } = require('../../models');


router.post('/', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res
                .status(404)
                .json({ message: 'No user found with that email.' });
        }

        const passwordMatch = user.checkPassword(req.body.password);

        if (passwordMatch) {
            const token = jwt.sign(
                {
                    exp: Math.floor(Date.now() / 1000) + 60 * 60,
                    data: {
                        name: user.name,
                        email: user.email,
                        id: user.id
                    }
                },
                'token successful'
            );

            res.json(token);
        } else {
            res.status(400).json({ message: 'You entered the wrong pw' });
        }


    });
});

module.exports = router;
