var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Meadolark Travel')
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About the Meadolark Travel');
});

// 404
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

// 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
});

app.listen(app.get('port'), () => {
    console.log(`Express server is run on http://localhost:${app.get('port')}`);
})