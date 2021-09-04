const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});