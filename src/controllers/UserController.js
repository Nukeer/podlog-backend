const client = require('./ClientController');
const crypto = require('../utils/Crypto');

module.exports = {
  async index(req, res) {
    const { email, password } = req.body;

    const senha = crypto.criptografarSenha(password);

    const query = `
      SELECT * FROM users WHERE email ILIKE '${email}';
    `;
    if (email === '' || password === '') {
      return res.status(400).send({ message: 'E-mail ou Senha não inserido' });
    }
    return await client
      .query(query)
      .then(s => {
        if (!s.rows[0]) {
          return res
            .status(400)
            .send({ message: 'Usuário não encontrado' });
        }
        const pass = s.rows[0];

        delete s.rows[0].password;

        if (pass === senha) {
          return res.status(200).send({ record: s.rows[0] });
        }

        return res.status(400).send({ message: 'Senha incorreta' });
      })
      .catch(err => console.log(err));
  },
  async store(req, res) {
    const { name, email, password } = req.body;

    const senha = crypto.criptografarSenha(password);

    const query = `
        INSERT INTO users (name, email, password, admin) VALUES ('${name}', '${email}', '${senha}', true)
    `;

    return await client
      .query(query)
      .then(s => {
        return res.json({ status: 200, message: 'success' });
      })
      .catch(err => console.log(err));
  }
};
