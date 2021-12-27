//It initializes the database connection and starts the express server.

const express = require('express')
const config = require('./src/config/config')
const routings = require('./src/api/router')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routings());


app.listen(config.get('port'), () => {
    var pp = config.get('port');
    var dbhost = config.get('db.host');
  console.log(`Example app listening at http://localhost:${pp}`)
  console.log(`db host : ${dbhost}`)
})