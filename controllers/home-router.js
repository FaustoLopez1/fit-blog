require("dotenv").config();
const fetch = require("node-fetch");
const router = require("express").Router();
const { getUserFromSession } = require("../util/helpers");
// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", async (req, res) => {
  try {
    console.log("Hii");
    const user = getUserFromSession(req);
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
  const user = getUserFromSession(req);
  res.render("dashboard", { title: "Dashboard", user });
});
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

//main page route
// router.get("/", (req, res) => {
//   res.render("HEALTH & WELLNESS", { title: "Health & Wellness" });
// });

module.exports = router;
