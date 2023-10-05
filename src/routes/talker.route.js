const talkRouter = require('express').Router();
// const connection = require('../database/connection');
// const { getAllTalkers, insertTalker } = require('../database/queries');
const fs = require('fs/promises');

talkRouter.get('/talker', async (req, res) => {
  try {
    const Primarydata = await fs.readFile('src/talker.json', 'utf8');
    const data = JSON.parse(Primarydata);
    res.json(data);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
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