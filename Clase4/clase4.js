const fs = require('fs')
const archivo = fs.writeFileSync('./fyh.txt',new Date().toLocaleString())

const leerArchivo = fs.readFileSync('./fyh.txt','utf-8')
console.log(leerArchivo)