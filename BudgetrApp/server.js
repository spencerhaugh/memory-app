const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget.js');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public/'));

app.get('/budget', (req, res) => {
    res.render('index.ejs', {
        budget: budget
    });
});

app.get('/budget/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/budget', (req, res) => {
    budget.push(req.body);
    res.redirect('/budget');
})

app.get('/budget/:id', (req, res) => {
    res.render('show.ejs', {
        line: budget[req.params.id] 
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});