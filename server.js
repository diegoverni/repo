const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<p>Sebastian Perez</p><p>Cristian San</p><p>Ramiro Reynoso</p><p>Jonathan Gomez</p><p>Matías Lorenzo</p>');
});

app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});
