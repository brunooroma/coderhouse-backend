const CRUD = require("../crudArchivo");
const express = require('express');
const router = express.Router();
const productosArchivo = new CRUD("productos.txt");

router.get('/productos', async (req, res) => {
    const mostrarProductos = await productosArchivo.getAll();
    res.json(mostrarProductos);;
})

router.get("/productos/:id", async (req, res) => {
    const id = req.params.id;
    const producto = await productosArchivo.getById(id);
    res.send(producto);
  });

router.post('/productos', async (req, res) => {
    try {
        const { title, price, img } = req.body;
        await productosArchivo.create({title,price,img})
        res.redirect("/api/productos");
      } catch (errors) {
        console.log(e);
      }
})

router.put('/productos/:id', async (req,res) => {
    const { id } = req.params;
    const { title, price } = req.body;
    await productosArchivo.modify(id,{title,price})
    res.redirect("/api/productos");
  } 
)

router.get("/delete/:id", async(req,res)=>{
    try{
      const { id } = req.params;
      await productosArchivo.delete(id)
      res.redirect("/api/productos");
    }
    catch(e){
      console.log(e);
    }
});

module.exports = router;