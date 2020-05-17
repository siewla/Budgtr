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
                budget: budgets[req.params.index],
                index: req.params.index
            }
        );
    },
    create: (req, res) => {
        budgets.push(req.body);
        let index=budgets.length-1;
        res.redirect(`/budget/${index}`);
    },

    edit: (req, res) =>{
        res.render('budgtr/edit.ejs', 
            {
                budget: budgets[req.params.index],
                index: req.params.index
            }
        );
    },

    update: (req, res) => {
        budgets[req.params.index] = req.body;
        let index=req.params.index;
        res.redirect(`/budget/${index}`);
    },

    deleteItem: (req, res) => {
        budgets.splice(req.params.index, 1);
        res.redirect('/budget');
    }
};