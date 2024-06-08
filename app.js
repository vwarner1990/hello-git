// app.js

// Definición de una función para saludar
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

// Uso de la función para mostrar un saludo en la consola
const nombreUsuario = "Carlos";
console.log(saludar(nombreUsuario));

// Definición de un objeto
const persona = {
  nombre: "Ana",
  edad: 28,
  saludar: function () {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  },
};

// Uso del método del objeto para mostrar un saludo en la consola
console.log(persona.saludar());

// Uso de un array
const frutas = ["manzana", "plátano", "cereza"];
frutas.forEach(function (fruta) {
  console.log(`Me gusta la ${fruta}`);
});
