console.log('Hello, TypeScript');

function add(a: number, b: number) {
    return a + b;
}

const sum = add(2,3);


//boolean 

let muted: boolean = true;
muted = false;

// muted = "callado";
// typescript lo detecta y dice que: Type string is not assignable to type boolean

//Numeros

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//ahora

//let age = '6';
//let denominador: number = age
//TypeScript lo detecta y dice que: Type string is not assignable to type number

//String

let nombre: string = 'Edwar';
let saludo = `Me llamo ${nombre}`;

//Arreglos
// En JavaScript podemos poner en un Arreglo String, Numeros, Boolean, los mezclamos todo
// En TypeScript podemos decidir de que tipo queremos el arreglo

let people: string[] = [];  //Un arreglo vacio de strings
people = ["Edwar", "Barbara", "Carlos Manuel"];

// people.push(9000);--> Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

let peopleAndNumbers: Array< string | number > = []; //Dclara un Array que acepta Strngs y Numeros
peopleAndNumbers.push("Maestra Angela");
peopleAndNumbers.push("Ana Cristina");

// Enum
// declara un conjunto

//enum Color {
    //Rojo,
    //Verde,
    //Azul,
//}

//let colorFavorito: Color = Color.Azul
// let ColorFavorito: Color = "Azul" --> Notese que se tiene que usar el enum creado.

//console.log(`Mi color favorito es ${colorFavorito}`);

// De esa manera devuelve esto en la consola
//Hello, TypeScript
//index.ts:60 Mi color favorito es 2
// Devuelve el indice en lugar del valor del elemento.
// Para que devuelva la palabra se debe declarar asi

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Azul
console.log(`Mi color favorito es ${colorFavorito}`);

// Con Any - para cualquiera

let comodin: any = "joker";
comodin = {type: 'Wildcard' };


// Object 
let someObject: object = {type: 'Wildcard' };

// Para mayores detalles, consultar documentacion Aqui: https://www.typescriptlang.org/docs/handbook/basic-types.html


//Funciones

function add(a: number, b: number): number {
    return a + b;
}

const sum = add (4,6);

// Notese como TypeScript proporciona la informacion sobre la funcion a medida que se 
// escriben los argumentos

//Es uno de los grandes beneficios de usar TypeScript
// Si la funcion fue importada y no tenemos la referencia
// Pues, bien, typescript se encarga de proporcionartela

// Para esos casos cuando la funcion, devuelve otra funcion

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName: string = 'Chinchilla'): string {
    return `${firstName} ${lastName}`;
}

const edwar = fullName('Richard');
console.log(edwar);

// Notese que al declarar la funcion --> function fullName(firstName: string, lastName?: string): string {
// Hay un signo de Interrogacion en lastname?: ---> eso indica que ese paramentro es opcional

// Asi cuando se le quiere dar un valor por defecto--> function fullName(firstName: string, lastName: string = 'Chinchilla'): string {

//Nota:
// Tipar funciones, va mas alla de tener autocompletado
// Nos ayuda a la hora de desarrollar y evita que cometamos errores

//interfaces
enum Color {
    Rojo = "Rojo",
    Verde = "Verde"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
    // con el simbolo ? significa que el color es opcional
    // Igual como se hace con los argumentos opcionales de una funcion
};

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,ñ

};

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
    // this. se refiere a rect que es un rectangulo
}

console.log(rect.toString());

// Las interfaces definen la forma exacta que debe tener un objeto
// No podemos añadir propiedades demas ni de menos
// En caso que una propiedad sea opcional, la tenemos que marcar como opcional




