const express = require('express')
const app = express()
const port = 3000
var ejs = require('ejs');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('job.ejs');
  //res.render('job.ejs', {}, function(err, data) {
  ////console.log(err || data)
  //console.log(err)
  //})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

