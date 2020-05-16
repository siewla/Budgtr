//database
const budgets = require('../models/budget');

module.exports ={
    index: (req, res) => {
        res.render('index.ejs', { budgets });
    },
    init: (req, res) => {
        res.render('new.ejs');
    },
    show: (req, res) => {
        res.render('show.ejs', { budget: budgets[req.params.id] });
    },
    create: (req, res) => {
        budgets.push(req.body);
        res.redirect('/budgets');
    }
};