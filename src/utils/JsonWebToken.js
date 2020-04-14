const env = require('../environments/environment.prod');
const jwt = require('jsonwebtoken');

module.exports = {
  createJWT(id) {
    return jwt.sign({ id }, env.segredo, {
      expiresIn: 1296000 // expires in 15 days
    });
  },
  verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, env.segredo, function (err, decoded) {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: 'Failed to authenticate token.' });

      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  },
};
