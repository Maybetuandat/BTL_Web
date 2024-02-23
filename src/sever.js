const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME
const path = require('path')

require('dotenv').config()
app.get('/', (req, res) => {
  res.send('Maybetuandat is coding')
})

app.get('/abc', (req, res) => {
   // res.send('Thang ngu nao dang xem')
   res.render('sample.ejs')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.listen(port,hostname,  () => {
  console.log(`Example app listening on port ${port}`)
})