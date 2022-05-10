const router = require("express").Router();
const withAuth = require("../../util/withAuth");

// This route isn't used by the boilerplate. It has been included to provide an
// example of an api route which requires the user to be authenticated by using
// the withAuth middleware.
router.get("/", withAuth, (req, res) => {
  res.json({ message: "hello user!", userId: req.session.userId });
});

module.exports = router;
