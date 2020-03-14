const router = require('express').Router();

const apiRoutes = require('./api-routes');
const htmlRoutes = require('./html-routes');
const authRoutes = require('./auth-routes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);
router.use('/auth', authRoutes);

module.exports = router;
