const express = require('express')
const app = express()
var session = require('express-session')
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
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

  
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  res.render('welcome.ejs', {distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', rows[0].solution)});
  })
  


})
app.get('/search', (req, res) => {

  
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  res.render('search.ejs', {distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', rows[0].solution)});
  })
  


})
app.post('/search', (req, res) => {

  
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  res.render('search.ejs', {distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', rows[0].solution)});
  })
  


})
app.get('/mycv', (req, res) => {

  
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  res.render('job.ejs', {distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', rows[0].solution)});
  })
  


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

