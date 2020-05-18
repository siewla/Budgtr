const { Budget } = require('../models/budget');

const BUDGET = [
    {
        date: '2019-12-31',
        name: 'Income',
        from: 'Old Glory Insurance',
        amount: 1000,
        tags: ['income', 'yay']
    },
    {
        date: '2019-12-31',
        name: 'Taxes',
        from: 'Government',
        amount: -300,
        tags: ['taxes']
    },
    {
        date: '2019-12-31',
        name: 'Retirement',
        from: 'Country Bank',
        amount: -200,
        tags: ['retirement', 'investing in the future']
    },
    {
        date: '2019-12-31',
        name: 'Savings',
        from: 'Country Bank',
        amount: -100,
        tags: ['savings', 'rainy day fund']
    },
    {
        date: '2019-12-31',
        name: 'Credit Card Payment',
        from: 'NPM Express',
        amount: -100,
        tags: ['credit card']
    },
    {
        date: '2019-12-31',
        name: 'Monthy Birthday Money from Aunt Tilda',
        from: 'Aunt Tilda',
        amount: 20,
        tags: ['Aunt Tilda is the best']
    },
    {
        date: '2019-12-31',
        name: 'Coffee',
        from: 'Moon Coin',
        amount: -4,
        tags: ['coffee']
    },
    {
        date: '2019-12-31',
        name: 'Internet',
        from: 'Horizon',
        amount: -100,
        tags: ['utilities']
    },
    {
        date: '2019-12-31',
        name: 'Groceries',
        from: 'Merchant Jack\'s',
        amount: -76,
        tags: ['groceries']
    },
    {
        date: '2019-12-31',
        name: 'Pet Food',
        from: 'Pet Precious Inc',
        amount: -7,
        tags: ['pets']
    },
];

const buildBudget =({ date, name, from, amount, tags }) =>{
    return new Budget(date, name, from, amount, tags);
};

const budget = {
    getAll () {
        return BUDGET.map(buildBudget);
    },

    getByIndex (index) {
        if (BUDGET[index]){
            return buildBudget(BUDGET[index]);
        }
    },

    addNew (newObj) {
        BUDGET.push(newObj);
    },

    getLength (){
        return BUDGET.length;
    },

    updateByIndex (index, updateObj){
        BUDGET[index] = updateObj;
    },

    deleteByIndex (index){
        BUDGET.splice(index, 1);
    },

    deleteAllItems (){
        BUDGET.splice(0, BUDGET.length);
    }
};

module.exports = {
    budget,
    buildBudget,
};
