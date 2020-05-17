//database
const budgets = require('../models/budget');

module.exports ={
    home: (req, res) => {
        res.render('budgtr/home.ejs');
    },

    index: (req, res) => {
        res.render('budgtr/index.ejs', { budgets });
    },
    init: (req, res) => {
        res.render('budgtr/new.ejs');
    },
    show: (req, res) => {
        res.render('budgtr/show.ejs', 
            { 
                budget: budgets[req.params.id],
                id: req.params.id
            }
        );
    },
    create: (req, res) => {
        budgets.push(req.body);
        res.redirect('/budgets');
    },
    edit: (req, res) =>{
        res.render('budgtr/edit.ejs', 
            {
                budget: budgets[req.params.id],
                index: req.params.id
            }
        );
    },

    update: (req, res) => {
        budgets[req.params.id] = req.body;
        res.redirect('/budgets');
    },

    // deleteItem: (req, res) => {
    //     budgets.splice(req.params.id, 1);
    //     res.redirect('/budgets');
    // }
};