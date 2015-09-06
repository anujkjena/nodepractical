var mysql = require('mysql');
var connection = mysql.createPool({
   host: '180.151.101.114',
  user: 'sa',
  password: 'root',
  database: 'pms'
});

connection.on('error', function(err) {
    connection.destroy();
})
module.exports = function(options, fn) {

      connection.query(options, fn);

}