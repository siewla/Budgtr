class Budget{
    constructor (date, name, from, amount, tags){
        this.date = date;
        this.name = name;
        this.from = from;
        this.amount = amount;
        this.tags = tags;
    }
}

module.exports = {
    Budget
};