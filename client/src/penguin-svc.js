const penguinDB = [
  { id: 1, name: 'Napoleon', imgUrl: 'https://vignette.wikia.nocookie.net/happyfeet/images/0/07/Emperor_Penguin_Manchot_empereur.jpg/revision/latest?cb=20140412162231' },
  { id: 2, name: 'Penguinelope', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg/1200px-SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg' },
];

const delay = (delayTimeout = 2000) => new Promise(resolve => setTimeout(resolve, delayTimeout));

// A Promise of Penguins
function getPenguins() {
  // Return a super-safe clone of our in-memory db
  return delay()
    .then(() => penguinDB.map(penguin => ({ ...penguin })));
}

export { getPenguins };
