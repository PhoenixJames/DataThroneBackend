var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port:3307,
    user: 'root',
    password: '1Gg61520!6',
    database: 'tdi_data',
    multipleStatements: true
});

connection.connect(function(err) {
  if (err) {
      console.error('ERR connecting: ' + err.stack);
  } else {
      console.log('CONNECTED AS ID ' + connection.threadId);
  }
});

module.exports = connection;