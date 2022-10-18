const CRUD = require("../crudArchivo");
const express = require('express');
const router = express.Router();
const productosArchivo = new CRUD("productos.txt");

router.get('/productos', async (req, res) => {
    const mostrarProductos = await productosArchivo.getAll();
    return res.json(mostrarProductos);
})

router.get("/productos/:id", async (req, res) => {
    const id = req.params.id;
    const producto = await productosArchivo.getById(id);
    if(!producto) {
      return res.send('No existe el id');
    }
    return res.send(producto);
  });

router.post('/productos', async (req, res) => {
    try {
        const { title, price, img } = req.body;
        if(!title || !price) {
          return res.send('Faltan datos')
        }
        const productoNuevo = await productosArchivo.create({title,price,img})
         return res.send(productoNuevo)
      } catch (errors) {
        console.log(e);
      }
})

router.put('/productos/:id', async (req,res) => {
    try{
      const { id } = req.params;
      const { title, price, img } = req.body;
      await productosArchivo.modify(id,{title, price, img})
      return res.send('Se actualizo el item correctamente')
  } 
  catch(e) {
    console.log(e);
    return res.send('Error al modificar el producto')
  }
})

router.delete("/productos/:id", async(req,res)=>{
    try{
      const { id } = req.params;
      await productosArchivo.delete(id)
      return res.send("Se elimino el producto");
    }
    catch(e){
      console.log(e);
      return res.send('Error al eliminar el producto')
    }
});

module.exports = router;