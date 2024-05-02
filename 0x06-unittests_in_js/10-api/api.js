const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 7865

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get(/^\/cart\/(\d+)$/, (req, res) => {
  res.send(`Payment methods for cart ${req.params[0]}`);
});

app.get('/available_payments', (req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
