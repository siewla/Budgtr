//database
const budget = require('../models/budget');

module.exports ={
    home: (req, res) => {
        res.render('budgtr/home.ejs');
    },

    index: (req, res) => {
        res.render('budgtr/index.ejs', { budget });
    },

    init: (req, res) => {
        res.render('budgtr/new.ejs');
    },

    show: (req, res) => {
        res.render('budgtr/show.ejs', 
            { 
                budget: budget[req.params.index],
                index: req.params.index
            }
        );
    },
    create: (req, res) => {
        budget.push(req.body);
        let index=budget.length-1;
        res.redirect(`/budget/${index}`);
    },

    edit: (req, res) =>{
        res.render('budgtr/edit.ejs', 
            {
                budget: budget[req.params.index],
                index: req.params.index
            }
        );
    },

    update: (req, res) => {
        budget[req.params.index] = req.body;
        let index=req.params.index;
        res.redirect(`/budget/${index}`);
    },

    deleteItem: (req, res) => {
        budget.splice(req.params.index, 1);
        res.redirect('/budget');
    }
};