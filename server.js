//dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false }));

// app.get('/budgets', (req, res) =>{
//     res.render('/budgtr/index.ejs');
// });
require('./router')(app);

//listener
app.listen(port, () => {
    console.log(`Budgtr app listening on port: ${port}`);
});