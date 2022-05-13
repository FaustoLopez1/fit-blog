const { User } = require("../models");

const getUserFromSession = async (req) => { 
  let user;
  if (req.session.isLoggedIn) {
    user = await User.findByPk(req.session.userId, {
      exclude: ["password"],
      raw: true,
    });
  }
  return user;
};


module.exports = {
  // add helper functions for handlebars here
  // Example:
  // json: object => JSON.stringify(object, null, 4),
  getUserFromSession
};
