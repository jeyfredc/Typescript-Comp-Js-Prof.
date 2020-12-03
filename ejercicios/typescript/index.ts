
// boolean
let muted: boolean = true;
muted = false;

// numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado: number = numerador / denominador;

// string

let nombre : string = 'Jeyfred';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
people.push('Roberto');

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Gonzalo');
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push('Federico');
peopleAndNumbers.push(1000);
peopleAndNumbers.push(20000);
peopleAndNumbers.push(15000000);

// enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;

console.log(`Mi color favorito es ${colorFavorito}`);

// Any

let comodin: any = 'Joker';
comodin = { type: 'Wilcard' };

// Object

let someObject = { type: 'Wilcard' };