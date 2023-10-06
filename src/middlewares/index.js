const loginValidation = require('./loginValidation');
const talkerValidation = require('./talkerValidation');
const authenticateToken = require('./tokenValidation');
const readFile = require('./readFile');
const { 
  nameValidation,
  ageValidation, 
  talkValidation, 
  watchedAtValidation, 
  rateValidation,
} = require('./talkerValidation');
const findIdValidation = require('./talkerIdValidation');

module.exports = {
  readFile,
  loginValidation,
  talkerValidation,
  authenticateToken,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  findIdValidation,
};