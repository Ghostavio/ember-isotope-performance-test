var generateApplications = function(amount) {
    var apps = [];
    for (var i = 0; i < amount; i++) {
        apps.push("foo");
    }
    return apps;
};

module.exports = function(app) {
    app.get('/api/applications/:amount', function(req, res) {
        req.params.amount = parseInt(req.params.amount);
        console.log('Serving %s applications.', req.params.amount);
        res.send(JSON.stringify(generateApplications(req.params.amount)));
    });

    app.get('/api/applications', function(req, res) {
        console.log('Serving 1000 applications.');
        res.send(JSON.stringify(generateApplications(1000)));
    });
};
