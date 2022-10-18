const express = require("express");
const routerProductos = require('./routes/productos.js');

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use('/api', routerProductos)

const server = app.listen(process.env.PORT || PORT, () =>
  console.log(`Server listening on PORT ${PORT}`)
);

server.on("error", (err) => console.log(`Error: ${err}`));