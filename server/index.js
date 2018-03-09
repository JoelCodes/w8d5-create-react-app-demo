const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

const penguinDB = [
  { id: 1, name: 'Napoleon', imgUrl: 'https://vignette.wikia.nocookie.net/happyfeet/images/0/07/Emperor_Penguin_Manchot_empereur.jpg/revision/latest?cb=20140412162231' },
  { id: 2, name: 'Penguinelope', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg/1200px-SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg' },
];

let idIndex = 3;
const penguinRouter = new express.Router();
penguinRouter.route('/')
  .get((req, res) => {
    res.json(penguinDB);
  })
  .post((req, res) => {
    const { name, imgUrl } = req.body;
    const newPenguin = { name, imgUrl, id: idIndex };
    idIndex += 1;
    penguinDB.push(newPenguin);
    res.status(201).json(newPenguin);
  });

app.use('/api/penguins', penguinRouter);

app.listen(3001, () => {
  console.log('Listening on 3001');
});
