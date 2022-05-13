require("dotenv").config();
const fetch = require("node-fetch");
const router = require("express").Router();
const { getUserFromSession } = require("../util/helpers");
const { User, Blog } = require("../models");
const withAuth = require("../util/withAuth");

// use withAuth middleware to redirect from protected routes.

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
//login
router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In" });
});
//signup
router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up" });
});

//dashboard page

// Suppose to add posts to dashboard
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Blog,
          attributes: ["description", "title", "date_created"],
        },
      ],
    });
    const blogs = userData.get({ plain: true });
    console.log({
      ...blogs,
      isLoggedIn: req.session.isLoggedIn,
    });
    res.render("dashboard", {
      ...blogs,
      isLoggedIn: req.session.isLoggedIn,
    });
  } catch (err) {
    res.status(500).send("Server Error");
    console.log(err);
  }
});

// //main page route
// router.get("/", (req, res) => {
//   res.render("HEALTH & WELLNESS", { title: "Health & Wellness" });
// });

// //post route
// router.get("/post", (req, res) => {
//   res.render("newpost", { title: "Post "});
// });

//nutrition page
router.get("/nutrition", async (req, res) => {
  const { q } = req.query;
  console.log(q);
  let searchResults = [];
  if (q) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.RAPIDKEY,
      },
    };
    const response = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${q}`,
      options
    );
    searchResults = await response.json();
    searchResults = searchResults.results;
  }
  const user = getUserFromSession(req);
  res.render("nutrition", { title: "Nutrition", user, searchResults });
});

module.exports = router;
