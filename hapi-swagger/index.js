module.exports = require('./lib');

var Hapi = require('hapi');

var server = new Hapi.Server('localhost', 8080);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('My Blog');
    }
});

server.start(function() {
    console.log("Hapi server started @ " + server.info.uri);
});
