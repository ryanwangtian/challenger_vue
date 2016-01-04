var superagent = require('superagent');

module.export = {
    fetchJson: function (url) {
        return superagent.get(url);
    },

    postJson: function(url, jsonBody) {
        return superagent.post(url)
                .set('Content-Type', 'application/json')
                .send(JSON.stringify(jsonBody));
    }
};