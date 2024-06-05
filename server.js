const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

const VALID_USERNAME = 'test';
const VALID_PASSWORD = 'testpass';

app.use(bodyParser.json());
app.use(cors());
app.post('/login', (req, res) => {
  const { username, password } = req.body;


  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    res.status(200).send('ログイン成功');
  } else {
    res.status(401).send('認証失敗');
  }
});

app.listen(PORT, () => {
  console.log(`サーバーがポート${PORT}で起動しました`);
});
