const router = require('express').Router();

const userRoutes = require('./user-route');
const productRoutes = require('./product-route');
const orderRoutes = require('./order-route');
// const htmlRoutes = require('./html-routes');
//const authRoutes = require('./auth-routes');

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
// router.use('/', htmlRoutes);
// router.use('/auth', authRoutes);

module.exports = router;
