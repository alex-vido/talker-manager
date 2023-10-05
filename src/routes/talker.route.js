const talkRouter = require('express').Router();
const fs = require('fs/promises');
const { loginValidation } = require('../middlewares');

const FILE_PATH = 'src/talker.json';

talkRouter.get('/talker', async (req, res) => {
  try {
    const Primarydata = await fs.readFile(FILE_PATH, 'utf-8');
    const data = JSON.parse(Primarydata);
    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

talkRouter.get('/talker/:id', async (req, res) => {
  try {
    const Primarydata = await fs.readFile(FILE_PATH, 'utf8');
    const data = JSON.parse(Primarydata);
    
    const id = parseInt(req.params.id, 10);

    const haveTalker = data.find((talker) => talker.id === id);

    if (haveTalker === undefined) {
      res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } else {
      res.json(haveTalker);
    }
  } catch (error) {
    res.status(error.statusCode || 404).json({ message: error.message });
  }
});

talkRouter.post('/login', loginValidation, async (req, res) => {
  try {
    console.log('');
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }  
});

module.exports = talkRouter;