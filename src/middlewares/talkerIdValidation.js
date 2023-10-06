const readFile = require('./readFile');

const findIdValidation = async (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const data = await readFile();
  const index = data.findIndex((talker) => talker.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  next();
};

module.exports = findIdValidation;