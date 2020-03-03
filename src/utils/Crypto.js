const crypto = require('crypto');

const DADOS_CRIPTOGRAFAR = {
  algoritmo: 'aes256',
  segredo: 'prupru',
  tipo: 'hex'
};

module.exports = {
  criptografarSenha(senha) {

    const cipher = crypto.createCipher(
      DADOS_CRIPTOGRAFAR.algoritmo,
      DADOS_CRIPTOGRAFAR.segredo
    );

    cipher.update(senha);
    
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
  },
  descriptografarSenha(senha) {
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    
    decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
    
    return decipher.final();
  }
};
