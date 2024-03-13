# TypeScript Fundamentals and Beyond

Welcome to our TypeScript journey! In this README, we'll dive into various aspects of TypeScript, covering everything from basic types to more advanced concepts like interfaces, generics, and working with the DOM. Let's embark on this adventure together!

## Basic Types in TypeScript

In TypeScript, just like in JavaScript, we have basic data types such as `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, and `object`. Additionally, TypeScript introduces some powerful type features like tuples and enums.

```typescript
// Basic types
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuples
let person: [string, number] = ["Alice", 30];

// Enums
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;
```

## Interfaces, Classes, and Functions

Interfaces help define the shape of an object, classes provide blueprints for creating objects, and functions define reusable blocks of code. Let's see how we can use them together.

```typescript
// Interface
interface Person {
  name: string;
  age: number;
}

// Class implementing interface
class Student implements Person {
  constructor(public name: string, public age: number) {}
}

// Function using interface
function greet(person: Person): void {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

let student = new Student("Alice", 25);
greet(student);
```

## Working with the DOM and TypeScript

TypeScript allows us to work with the DOM more safely by providing type checking and autocompletion. Let's create a simple example:

```typescript
// DOM elements
const button = document.querySelector("button") as HTMLButtonElement;
const input = document.querySelector("input") as HTMLInputElement;

// Event listener
button.addEventListener("click", () => {
  console.log("Button clicked!");
  const value = input.value;
  console.log("Input value:", value);
});
```

## Generic Types

Generics enable us to create reusable components that can work with a variety of data types while still maintaining type safety. Let's look at a generic function:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<number>(10); // returns 10
```

## Namespaces and Declaration Merging

Namespaces provide a way to logically group related code, preventing naming collisions. Declaration merging allows us to extend existing interfaces or types across multiple files.

```typescript
// Namespace
namespace Math {
  export function add(x: number, y: number): number {
    return x + y;
  }
}

// Declaration merging
interface User {
  name: string;
}

interface User {
  age: number;
}

let user: User = {
  name: "Alice",
  age: 30,
};
```

## Using Ambient Namespace to Import an External Library

Ambient namespaces are used to declare types for libraries that are already written in JavaScript. Let's see how to import an external library like jQuery:

```typescript
// Declaration file (e.g., jquery.d.ts)
declare namespace $ {
  function ajax(url: string, settings?: any): void;
}

// Using ambient namespace
$.ajax("/api/data", {
  method: "GET",
  success: (data) => {
    console.log("Data received:", data);
  },
});
```

## Basic Nominal Typing with TypeScript

TypeScript uses structural typing by default, but sometimes we need to enforce nominal typing for more precise type checking. Let's see how to achieve this using a simple example:

```typescript
// Nominal typing
type Username = string & { readonly brand: unique symbol };

function createUser(username: Username): void {
  console.log("User created with username:", username);
}

const user1: Username = "Alice" as Username;
const user2: Username = "Bob" as Username;

createUser(user1); // No error
createUser(user2); // No error
createUser("Charlie"); // Error: Argument of type 'string' is not assignable to parameter of type 'Username'
```

And there we have it! A comprehensive exploration of TypeScript covering basic types, advanced concepts, and practical examples. Happy coding! 🚀
