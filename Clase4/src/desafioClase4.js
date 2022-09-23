import { Container } from './containers/container.js'

const documento = new Container('productos')
documento.getAll()
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }))

documento.save({
    title: 'Producto 1',
    price: 300,
    img: 'imagen'
})
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }))

documento.getById(3)
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }))

documento.deleteById(1)
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }))

documento.deleteAll()
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }))