// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const port= 3000

//Setting template engine as handlebars
const exphbs = require('express-handlebars');
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const form = require('./public/javascripts/tools')

// 設定首頁路由
app.get('/', (req, res) => {
  
  res.render('index',form)
})


// 設定 port 3000
app.listen(port, () => {
 
  console.log(`Express app listening on port ${port}.`)
})