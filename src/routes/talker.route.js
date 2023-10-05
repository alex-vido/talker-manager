const talkRouter = require('express').Router();
const fs = require('fs/promises');

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
    res.status(error.statusCode || 404).json({ message: 'Pessoa palestrante não encontrada' });
  }
});

/*
talkRouter.post('/talker', async (req, res) => {
  const { id, name, age, talkWatchedAt, talkRate } = req.body;

  // const [{ insertId }] = await connection.execute(insertTalker, [id, name, age, talkWatchedAt, talkRate]);
  return res.status(201).json({ id: insertId, name });
});

talkRouter.post('/talker/:talkerId', async (req, res) => {
  const { name, age, talkWatchedAt, talkRate} = req.body;
  const { talkerId } = req.params;

  await connection
    .execute('INSERT INTO talkers (id, name, age, talk_watched_at, talk_rate) VALUES (?, ?, ?, ?, ?)',
      [Number(id), name, Number(age), talWatchedAt, talkRate]);

  return res.status(201).json({ message: 'Insertion talker success' })
});
*/

module.exports = talkRouter;