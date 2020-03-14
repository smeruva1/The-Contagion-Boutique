const router = require("express").Router();

const apiRoutes = require("./api/api-routes");
const htmlRoutes = require("./api/html-routes");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;