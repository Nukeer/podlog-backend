const Mail = require('../models/Mail');
const client = require('./ClientController');
// index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const query = `
      SELECT * FROM email;
    `;

    return await client
      .query(query)
      .then(s => {
        console.log(s)
        return res.json({ status: 'success', record: s.rows });
        // return res.json({ status: 'error', message: 'Senha incorreta' });
      })
      .catch(err => console.log(err));
  },
  async store(req, res) {
    const { name, email, subject, text } = req.body;

    const query = `
        INSERT INTO email (name, email, subject, text) VALUES ('${name}', '${email}', '${subject}', '${text}')
    `;

    return await client
      .query(query)
      .then(s => {
        return res.json({ status: 200, message: 'success' });
      })
      .catch(err => console.log(err));
  }
};
