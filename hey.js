const express = require('express')
const multer = require('multer');
const upload = multer();
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

  
  connection.query('select * from job order by rand() limit 4', (err, rows, fields) => {
    if (err) throw err
  
  res.render('welcome.ejs', {q:'', jobs:rows, distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', 'jaja')});
  })
  


})
app.get('/search', (req, res) => {

var {
  q = "", 
  since = new Date().toString(),
  fields = ['x'],
  anotherField = 'default'
} = req.query;

  
  connection.query('SELECT * from job where lower(description) like \'%'+ q.replaceAll(" ","%").toLowerCase() + '%\'', (err, rows, fields) => {
    if (err) throw err
  
  res.render('search.ejs', {q: q, jobs: rows,distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', 'hfh')});
  })
  


})
app.post('/search', (req, res) => {

  
  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows[0].solution)
  res.render('search.ejs', {distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', rows[0].solution)});
  })
  


})
app.get('/cv', (req, res) => {
var info=req.session.info || {nom:"",
email:"",
nom:"",
jobs:[],
skills:[],
cities:[],
prenom:"",
entite:"",
prenomwelcome:"anonyme",
phone:"",
lettre:""};
var moncv=(info.skills.join(' ').split(" ")).concat(info.jobs.join(' ').split(" ")).filter(function(e){return e});
var paspremier=false;
var mysql="select * from job";
for (var y=0;y<moncv.length;y++){
if (!paspremier){
mysql+=" where description like '%"+moncv[y]+"%'";
}else{
mysql+=" or description like '%"+moncv[y]+"%'";
}
paspremier=true;
}
console.log(moncv);
if (moncv.length === 0){
mysql+=" limit 0";
}

  
  connection.query('SELECT * from entreprise', (err, rows, fields) => {
    if (err) throw err
  connection.query(mysql, (errjob, rowsjob, fieldsjob) => {
    if (err) throw err
  
  res.render('job.ejs', {info: info,jobs:rowsjob, entites: rows, q:'', distances: [0, 10, 30, 50, 100, 150], solution: ('The solution is: ', 'lkjh')});
  })
  })
  


})
app.post('/cv', upload.any(), (req, res) => {

var formData = req.body;
var formUpload = req.files;
console.log('form data', formData);
console.log('form data', formUpload);
var {
  nom = "",
  email = "",
  cv = {},
  lettre = "",
  prenom = "",
  entite="",
  prenomwelcome = "anonyme",
  phone = "",
  skills=[],
  jobs=[],
  cities=[],
  myskills = "",
  anotherField = 'default'
} = formData;
var info={nom:nom,
prenom:prenom,
entite:entite,
prenomwelcome:prenom,
email:email,
  skills:((typeof skills === 'string' || skills instanceof String) ? [skills] : skills),
  jobs:((typeof jobs === 'string' || jobs instanceof String) ? [jobs] : jobs),
  cities:((typeof cities === 'string' || cities instanceof String) ? [cities] : cities),
cv:formUpload[0],
phone:phone,
lettre:lettre};
console.log(info);
req.session.info=info;
req.session.skills=myskills.split("+=+=+=");



  
  connection.query("select 1 + 1 as solution", (err, rows, fields) => {
    if (err) throw err
  
    res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({info: info, solution: ('The solution is: ', "dfg")}));
  })
  


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

