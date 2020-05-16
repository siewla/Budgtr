  
const { home, index, init, show, create } = require('./controllers/budgtr');

module.exports = (app) => {
    app.get('/', home);
    app.get('/budgets', index); //index route
    app.get('/budgets/new', init); //new route
    app.get('/budgets/:id', show); //show route
    app.post('/budgets', create); //create/post route
};

