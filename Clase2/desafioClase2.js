class Usuario {

    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }

    getFullName() {
        return `Mi nombre completo es ${this.nombre} ${this.apellido} `
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota)
    }

    countMascotas() {
        return `El numero de mascotas del usuario es: ${this.mascotas.length}`
    }

    addBook(nombre,autor) {
        this.libros.push({nombre: `${nombre}`,autor: `${autor}`})
    }

    getBookNames() {
        return this.libros.map((a) => a.nombre)
    }
} 

const librosFavoritos = [
    {nombre: 'Harry Potter y la Piedra Filosofal', autor: 'J.K.Rowling'},
    {nombre: 'El Señor de los Anillos', autor: 'J.R.R.Tolkien'}
]

let mascostasUsuario = ['Perro']

const usuario = new Usuario('Julian','Nuñez',librosFavoritos,mascostasUsuario) 

console.log(usuario)

console.log(usuario.getFullName())
usuario.addMascota('Gato')
console.log(usuario.mascotas)
console.log(usuario.countMascotas())
usuario.addBook('Harry Potter y la Camara Secreta','J.K.Rowling')
console.log(usuario.libros)
console.log(usuario.getBookNames())