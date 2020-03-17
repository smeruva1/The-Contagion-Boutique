//defining middleware as it allows us to group the route handlers
const router = require("express").Router();

// collect all api endpoints
const apiRoutes = require("./api");
const htmlRoutes = require("./html/html-routes");

//Load router-level middleware by using the router.use() 
router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;