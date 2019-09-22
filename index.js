let test;
test = 45;
console.log(test);
let data = 'Hello Ej))';
const arr_init = ['go', 'and', 'see'];

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {data: data, arr_init: arr_init})
});

app.get('/create', function (req, res) {
    res.render('create');
});

app.post('/create', function (req, res) { //eslint-disable-line prettier/prettier
    console.log('Request::', req);
    let owe_data = req.body.text;
    res.render('owe', {owe_data: owe_data});
    arr_init.push(owe_data);
});

app.listen(3000, () => console.log('Listening on 3000 port!'));