const router = require("express").Router();
const homeRouter = require("./home-router");
const apiRouter = require("./api");
const dashboardRouter = require("./dashboard-router");

router.use("/", dashboardRouter);
router.use("/", homeRouter);
router.use("/api", apiRouter);

module.exports = router;
