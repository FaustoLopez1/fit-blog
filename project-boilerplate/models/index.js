const User = require("./User");
const Blog = require('./Blog');
const Comment = require('./Comment');

// Define sequelize associations in this file.
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Blog.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Blog.hasMany(Comment,{
    foreignKey: 'blog_id'
  })
  
  Comment.belongsTo(User, {
      foreignKey: 'user_id',
  })

module.exports = { User };
