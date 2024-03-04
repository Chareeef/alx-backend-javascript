# ES6 Basics

Welcome to the ES6 Basics project! In this project, we'll explore the fundamental concepts and features introduced in ES6, also known as ECMAScript 2015.

## Introduction to ES6

ES6, or ECMAScript 2015, is a major update to the JavaScript language that brought significant enhancements and new features to improve code readability, maintainability, and expressiveness.

## New Features in ES6

### Constants and Variables

ES6 introduced the `const` and `let` keywords for declaring variables. Constants (`const`) cannot be reassigned, while variables declared with `let` are mutable and have block scope.

```javascript
// Constants
const PI = 3.14;
PI = 3.14159; // Error: Assignment to constant variable

// Variables
let counter = 0;
counter++; // 1
```

### Block-scoped Variables

Variables declared with `let` and `const` have block scope, meaning they are only accessible within the block they are defined in.

```javascript
{
    let x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined
```

### Arrow Functions

Arrow functions provide a concise syntax for writing anonymous functions, with implicit return and lexical scoping of `this`.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### Default Function Parameters

Functions can now have default parameter values, which are used when no argument is provided during function invocation.

```javascript
const greet = (name = 'Guest') => {
    console.log(`Hello, ${name}!`);
};
greet(); // Hello, Guest!
```

### Rest and Spread Function Parameters

The rest parameter (`...`) allows functions to accept an indefinite number of arguments, while the spread operator (`...`) spreads an iterable into individual elements.

```javascript
const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sum(1, 2, 3, 4)); // 10

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

### String Templating

ES6 introduced template literals, allowing for easier string interpolation and multiline strings.

```javascript
const name = 'Alice';
console.log(`Hello, ${name}!`); // Hello, Alice!
```

### Object Creation and Properties

Object literals can now have shorthand property syntax and computed property names, making object creation more concise and flexible.

```javascript
const key = 'name';
const person = {
    [key]: 'John',
    age: 30,
};
console.log(person.name); // John
```

### Iterators and for-of Loops

ES6 introduced the concept of iterators and the `for-of` loop, providing a simple way to iterate over iterable objects like arrays and strings.

```javascript
const iterable = [1, 2, 3];
for (const item of iterable) {
    console.log(item);
}
// Output:
// 1
// 2
// 3
```

## Conclusion

The features introduced in ES6 revolutionized JavaScript development, making the language more powerful and expressive. Understanding these basics is essential for mastering modern JavaScript development.
