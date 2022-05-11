const router = require("express").Router();
const { User } = require("../models");

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
    res.render("home", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up" });
});

//dashboard page
router.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Dashboard" });
});
//nutrition page
router.get("/nutrition", (req, res) => {
  res.render("nutrition", { title: "Nutrition" });
});

//CREATE button on dashboard
router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});
module.exports = router;
