const talkRouter = require('express').Router();
const fs = require('fs/promises');
const generateToken = require('../utils/tokenGenerator');
const readFile = require('../middlewares/readFile');
const { 
  loginValidation, 
  authenticateToken, 
  nameValidation, 
  ageValidation, 
  talkValidation,
  watchedAtValidation,
  rateValidation,
  findIdValidation,
} = require('../middlewares');

const FILE_PATH = 'src/talker.json';

talkRouter.get('/talker', async (req, res) => {
  try {
    res.json(await readFile());
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

talkRouter.get('/talker/:id', async (req, res) => {
  try {
    const data = await readFile();
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
    const token = generateToken();
    res.status(200).json({ token });
  } catch (error) {
    res.status(error.statusCode || 400).json({ message: error.message });
  }  
});

talkRouter.post('/talker',
  authenticateToken,
  nameValidation,
  ageValidation, 
  talkValidation, 
  watchedAtValidation, 
  rateValidation, 
  async (req, res) => {
    try {
      const data = await readFile();
      const { name, age, talk } = req.body;
      const id = data.length + 1;
      const newTalker = { id, name, age, talk };
      data.push(newTalker);
      await fs.writeFile(FILE_PATH, JSON.stringify(data));
      res.status(201).json(newTalker);
    } catch (error) {
      res.status(error.statusCode || 401).json({ message: error.message });
    }
  });

talkRouter.put('/talker/:id',
  authenticateToken,
  nameValidation,
  ageValidation,
  talkValidation, 
  watchedAtValidation, 
  rateValidation,
  findIdValidation,
  async (req, res) => {
    try {
      const data = await readFile();
      const { name, age, talk } = req.body;
      const id = parseInt(req.params.id, 10);
      const newTalker = { id, name, age, talk };
      data[id] = newTalker;
      await fs.writeFile(FILE_PATH, JSON.stringify(data));
      res.status(200).json(newTalker);
    } catch (error) {
      res.status(error.statusCode || 401).json({ message: error.message });
    }
  });

talkRouter.delete('/talker/:id',
  authenticateToken,
  findIdValidation,
  async (req, res) => {
    try {
      const data = await readFile();
      const id = parseInt(req.params.id, 10);
      const newTalker = data.filter((talker) => talker.id !== id);
      await fs.writeFile(FILE_PATH, JSON.stringify(newTalker));
      res.status(204).json();
    } catch (error) {
      res.status(error.statusCode || 401).json({ message: error.message });
    }
  });

module.exports = talkRouter;