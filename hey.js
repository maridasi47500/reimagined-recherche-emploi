const express = require('express')
const app = express()
const port = 3000
var ejs = require('ejs');
app.set('view engine', 'ejs');
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'myuser',
  password: 'password',
  database: 'userdb'
})
  connection.connect()
connection.query('USE userdb;', function (error, results, fields) {
    if (error) throw error
});
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
    console.log('The solution is: ', rows[0].solution)
  })
  
//  connection.end()



app.get('/', (req, res) => {

  //connection.connect()
  
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  res.render('job.ejs', {distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', rows[0].solution)});
  })
  
//  connection.end()


  //res.render('job.ejs', {}, function(err, data) {
  ////console.log(err || data)
  //console.log(err)
  //})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

