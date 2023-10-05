module.exports = {
  getAllTalkers: 'SELECT * FROM talkers',
  insertTalker: `INSERT INTO talkers (id, name, age, talk_watched_at, talk_rate) VALUES (?, ?, ?, ?, ?);`
}