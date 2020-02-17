const Mail = require('../models/Mail');
// index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const mails = await Mail.find();

    return res.json(mails);
  },
  async store(req, res) {
    const { name, mail, subject, text } = req.body;

    const newMail = await Mail.create({
      name,
      mail,
      subject,
      text
    });

    return res.json(newMail);
  }
};
