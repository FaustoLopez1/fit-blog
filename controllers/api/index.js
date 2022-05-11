const router = require("express").Router();
const usersRouter = require("./users-router");
const postRoutes = require('./post-router');
const exampleRouter = require("./comment-router");

router.use("/users", usersRouter);
router.use('/post', postRoutes);
router.use("/example", exampleRouter);

module.exports = router;
