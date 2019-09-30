
'use strict'
module.exports = function (app) {
    var contactList = require('../controllers/contactListController')

    app.route('/login')
        .post(contactList.login)

    app.route('/contacts/getMany')
        .get(contactList.listAllContacts)

    app.route('/contacts/add')
        .post(contactList.createAContact)

    app.route('/contacts/getOne/:contactId')
        .get(contactList.readAContact)

    app.route('/contacts/update/:contactId')
        .put(contactList.updateAContact)

    app.route('/contacts/delete/:contactId')
        .delete(contactList.deleteAContact)
}