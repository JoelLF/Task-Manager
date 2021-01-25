var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "joel123",
    database: "db_itc_task_manager",
    port: "3306",
});

function beforeRender(request, response, done) {
    con.connect(function(err) {
        if (err) throw err;
        con.query('SELECT id, username FROM users;', function(err, result, fields) {
            if (err) throw err;
            request.data = {
                config: result
            };
            done();
        });
    });
}