//database
const budgets = require('../models/budget');

module.exports ={
    index: (req, res) => {
        res.render('budgtr/index.ejs', { budgets });
    },
    init: (req, res) => {
        res.render('budgtr/new.ejs');
    },
    show: (req, res) => {
        res.render('budgtr/show.ejs', { budget: budgets[req.params.id] });
    },
    create: (req, res) => {
        budgets.push(req.body);
        res.redirect('/budgets');
    }
};