const mongoose = require('mongoose');

const MailSchema = new mongoose.Schema({
    name: String,
    mail: String,
    subject: String,
    text: String
});

module.exports = mongoose.model('Mail', MailSchema);