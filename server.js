//server.js
//npm install express axios mongoose
var express = require('express')
bodyParser = require('body-parser')
mongoose = require('mongoose')
var cors = require('cors')

app = express()
port = process.env.PORT || 3000

Contact = require('./api/models/contactListModel.js')
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://siraphop95:sira123456@cluster0-yejh3.gcp.mongodb.net/Contactdb?retryWrites=true&w=majority', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/routes.js')
routes(app)

app.listen(port)

console.log('Contact List started on : '+ port)
