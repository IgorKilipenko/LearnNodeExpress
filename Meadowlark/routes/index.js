exports.index = function(req, res) {
    res.render('index', {name: 'Igor'})
};

exports.about = function(req, res) {
    res.render('about', {tag: 'About tag'})
};