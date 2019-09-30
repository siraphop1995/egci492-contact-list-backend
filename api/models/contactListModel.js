var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ContactSchema = new Schema({
    contactID: {
        type: String,
        Required: 'Please enter'
    },
    firstName: {
        type: String,
        Required: 'Please enter'
    },
    lastName: {
        type: String,
        Required: 'Please enter'
    },
    mobileNo: {
        type: String,
        Required: 'Please enter'
    },
    email: {
        type: String,
        Required: 'Please enter'
    },
    facebook: {
        type: String,
        Required: 'Please enter'
    },
    imageUrl: {
        type: String,
        Required: 'Please enter'
    },
    createdDate: {
        type: Date,
        default: Date.now

    },
})

module.exports = mongoose.model('Contacts', ContactSchema)