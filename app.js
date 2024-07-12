import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books',(req, res) => {
  res.send(createListTemplate())
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});