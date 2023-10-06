const loginValidation = require('./loginValidation');
const talkerValidation = require('./talkerValidation');
const authenticateToken = require('./tokenValidation');
const { 
  nameValidation,
  ageValidation, 
  talkValidation, 
  watchedAtValidation, 
  rateValidation,
} = require('./talkerValidation');

module.exports = {
  loginValidation,
  talkerValidation,
  authenticateToken,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
};