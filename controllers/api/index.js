const router = require("express").Router();
const usersRouter = require("./users-router");
const exampleRouter = require("./example-router");

router.use("/users", usersRouter);
router.use("/example", exampleRouter);

module.exports = router;
