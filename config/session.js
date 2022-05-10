const session = require("express-session");
const sequelize = require("./connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Check for SECRET env var and throw an error if it isn't set.
if (!process.env.SECRET) {
  // add SECRET=<your session secret> to .env file in local development. Add
  // SECRET to the Heroku config for production.
  throw new Error("SECRET environmental variable must be set.");
}

// Configure session options
const sess = {
  secret: process.env.SECRET,
  cookie: {
    // cookies expire after 1 day (time in milliseconds)
    maxAge: 8.64e7
  },
  resave: false,
  // Wait to save session until the user logs in
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Exports session middleware. Import and pass to app.use() at startup.
module.exports = session(sess);
