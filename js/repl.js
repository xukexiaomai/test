var repl = require('repl');

var server = repl.start({});
var con = server.context;
con.name = 'xk';
con.age = 18;
