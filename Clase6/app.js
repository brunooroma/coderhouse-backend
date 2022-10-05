const CRUD = require('./crudArchivo')
const express = require('express');

const PORT = 8080;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const server = app.listen(process.env.PORT || PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

const productosArchivo = new CRUD('productos.txt');

app.get('/productos', async (req, res) => {
    const mostrarProductos = await productosArchivo.getAll();
    res.json(mostrarProductos);
})

app.get('/productos/:id', async (req, res) => {
    const id = req.params.id
    const producto= await productosArchivo.getById(id)
    res.send(producto);
})