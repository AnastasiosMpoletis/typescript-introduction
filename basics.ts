// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters


// Primitives

let age: number = 13;
age = 14;

let userName: string = 'Pegasus';
userName = 'Doggo';

let instructor: boolean = true;
instructor = false;

// let hobbies: null;
// error
// hobbies = 'Basketball';


// More complex types

// array
let hobbies: string[];
hobbies = ['Sports', 'Coocking'];

// Create a type
type Person = {
  name: string,
  age: number
};

// object
// TypeScript default type fallback
// let person; = let person: any;
// let person: {
//   name: string,
//   age: number
// };

let person: Person;

person = {
  name: "Pegasus",
  age: 5
};

// error
// person = {
//   isEmployee: true
// };

// array of objects
let people: Person[];


// Type inference

// reduntant definition
// let course: string = 'React - The Complete Guide';
// let course = 'React - The Complete Guide';

// course automatically defined as string
// error
// course = 22;

let course: string | number = 'React - The Complete Guide'; // union types. Set multiple types for a variable
// valid
course = 22;


// Functions & types

// Reduntant, but we can set a type like this
// function add(a: number, b: number): number {
function add(a: number, b: number) {
  return a + b; // Type inference
}

// function printOutput(value: any): void {
function printOutput(value: any) {
  console.log(value);
}