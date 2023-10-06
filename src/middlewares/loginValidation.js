function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}
const crypto = require('crypto');


const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' }); 
  } if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  } if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  } 
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!validEmail.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  } 
  const token = generateToken();
  res.status(200).json({ token });

  next();
};

module.exports = loginValidation;
