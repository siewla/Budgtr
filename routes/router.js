  
const { budgetControllers } = require('../controllers/budgtr');

module.exports = (app) => {
    app.get('/', budgetControllers.home);
    app.get('/budget', budgetControllers.index); //index route
    app.get('/budget/new', budgetControllers.init); //new route
    app.get('/budget/:index', budgetControllers.show); //show route
    app.post('/budget', budgetControllers.create); //create/post route
    app.put('/budget/:index', budgetControllers.update); //update route
    app.get('/budget/:index/edit', budgetControllers.edit); //edit route
    app.delete('/budget/all', budgetControllers.deleteAll); //delete all route
    app.delete('/budget/:index', budgetControllers.deleteItem); //delete route
    
};

