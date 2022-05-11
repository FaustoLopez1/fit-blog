const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Blog, User, Comment } = require('../models');
const withAuth = require('../util/withAuth');
router.get('/', withAuth, (req, res) => {
    Blog.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'description',
                'date_created'
            ],
            include: [{
                    model: Comment,
                    attributes: [
                        'id', 
                        'comment_description', 
                        'blog_id', 
                        'user_id', 
                        'date_created'
                    ],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/edit/:id', withAuth, (req, res) => {
    Blog.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'description',
                'date_created'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: [
                    'id', 
                    'comment_description', 
                    'blog_id', 
                    'user_id', 
                    'date_created'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostData.get({ plain: true });
            res.render('edit-post', { post, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/new', (req, res) => {
    res.render('new-post');
});



module.exports = router;