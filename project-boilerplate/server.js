require("dotenv").config();
const exphbs = require("express-handlebars");
const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");
const router = require("./controllers");
const helpers = require("./util/helpers");
const sessionMiddleware = require("./config/session");

const PORT = process.env.PORT || 3001;
const app = express();

// setup app middleware
app.use(sessionMiddleware);
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ helpers }));
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect routes
app.use(router);

// connect db and listen
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.error(err);
        return process.exit(1);
      }
      console.log(`App listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
