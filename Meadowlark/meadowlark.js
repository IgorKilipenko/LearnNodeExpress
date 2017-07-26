var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine({ beautify: true }));

app.set('port', process.env.PORT || 3000);

app.get('/', require('./routes').index);

app.get('/about', (req, res) => {
    res.render('About the Meadolark Travel');
});

// 404
app.use((req, res) => {
    res.status(404);
    res.render('404 - Not found');
});

// 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.send('500 - Server error');
});

app.listen(app.get('port'), () => {
    console.log(`Express server is run on http://localhost:${app.get('port')}`);
})