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
        const message =
          s.rows.length === 0
            ? 'Não foi encontrado nenhum E-mail'
            : 'Encontrados E-mails com sucesso';
        return res.status(200).send({ record: s.rows, message });
      })
      .catch(err => res.status(400).send({ message: err }));
  },
  async store(req, res) {
    const { name, email, subject, text } = req.body;

    const query = `
        INSERT INTO email (name, email, subject, text) VALUES ('${name}', '${email}', '${subject}', '${text}')
    `;

    return await client
      .query(query)
      .then(s =>
        res.status(200).send({ message: 'E-mail enviado com sucesso!' })
      )
      .catch(err => res.status(400).send({ message: err }));
  }
};
