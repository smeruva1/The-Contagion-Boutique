//defining middleware as it allows us to group the route handlers
const router = require('express').Router();

// import api route files
const userRoutes = require('./user-route');
const productRoutes = require('./product-route');
const orderRoutes = require('./order-route');
//const authRoutes = require('./auth-routes');

// set up and prepend api routes from imported files
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
// router.use('/auth', authRoutes);

// export packaged routes
module.exports = router;
