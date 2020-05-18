//database
const { budget , buildBudget } = require('../database/budget');

module.exports ={
    home: (req, res) => {
        res.render('budgtr/home.ejs');
    },

    index: (req, res) => {
        res.render('budgtr/index.ejs', { budget : budget.getAll(), total : budget.getTotal() });
    },

    init: (req, res) => {
        res.render('budgtr/new.ejs');
    },

    show: (req, res) => {
        res.render('budgtr/show.ejs', 
            { 
                budget: budget.getByIndex(req.params.index),
                index: req.params.index
            }
        );
    },
    create: (req, res) => {
        const newBudget = buildBudget(req.body);
        budget.addNew(newBudget);
        let index=budget.getLength()-1;
        res.redirect(`/budget/${index}`);
    },

    edit: (req, res) =>{
        res.render('budgtr/edit.ejs', 
            {
                budget: budget.getByIndex(req.params.index),
                index: req.params.index
            }
        );
    },

    update: (req, res) => {
        let index=req.params.index;
        budget.updateByIndex(index, req.body);
        res.redirect(`/budget/${index}`);
    },

    deleteItem: (req, res) => {
        budget.deleteByIndex(req.params.index);
        res.redirect('/budget');
    },

    deleteAll: (req, res) => {
        budget.deleteAllItems();
        res.redirect('/budget');
    }
};