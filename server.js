const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const BITCOIN_RPC_USER = 'orangemaster';
const BITCOIN_RPC_PASSWORD = 'hugahuga837Luka';
const BITCOIN_RPC_URL = 'http://127.0.0.1:8332/';

const callBitcoinRPC = async (method, params = []) => {
  const response = await axios.post(BITCOIN_RPC_URL, {
    jsonrpc: '1.0',
    id: 'curltest',
    method: method,
    params: params
  }, {
    auth: {
      username: BITCOIN_RPC_USER,
      password: BITCOIN_RPC_PASSWORD
    }
  });
  return response.data;
};

app.post('/getblock', async (req, res) => {
  const { blockhash } = req.body;
  try {
    const block = await callBitcoinRPC('getblock', [blockhash]);
    res.json(block);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/gettransaction', async (req, res) => {
  const { txid } = req.body;
  try {
    const transaction = await callBitcoinRPC('getrawtransaction', [txid, true]);
    res.json(transaction);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

