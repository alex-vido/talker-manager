const path = require('path');
const fs = require('fs/promises');

const FILE_PATH = path.join(__dirname, '../talker.json');

const readFile = async () => { 
  const Primarydata = await fs.readFile(FILE_PATH, 'utf-8');
  const data = JSON.parse(Primarydata);
  return data;
};

module.exports = readFile;