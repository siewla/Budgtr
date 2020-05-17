  
const { home, index, init, show, create, update, edit, deleteItem } = require('./controllers/budgtr');

module.exports = (app) => {
    app.get('/', home);
    app.get('/budgets', index); //index route
    app.get('/budgets/new', init); //new route
    app.get('/budgets/:index', show); //show route
    app.post('/budgets', create); //create/post route
    app.put('/budgets/:index', update); //update route
    app.get('/budgets/:index/edit', edit); //edit route
    app.delete('/budgets/:index', deleteItem); //delete route
};

