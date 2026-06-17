**## Variables in JS**

A variable is a named container that stores a value of a specific data type

variables are used in programming to store values
let name ="Faith"
let age="26"

## Declaring Variables in JS

we use keyword to create variables like

~~1. Var~~

## 2. let

## 3. const

## rules for creating variables

spaces is not allowed in variables

use letters, digits and underscores only

its case sensitive

cannot usespecial character like $ , @ , -

dont start a variable with a number

## Valid Variable names

let firstname;
let age26;
let user_name;

## Invalid Variable Names

let first name; // contains a space
let 26age; //starts with a number
let user-name; //contains a hyphen

## \*\*ways or writing variables

pascal case = first letter of each word is capital from the beggining
//example
LastName

camel case - recommend for js , is like pascal, but only the first letter is small..the rest are capital for the begining of the words
//example
lastName

snake case\*\*= recommended for python ,there is an underscore after every word
//example
last_name

certain words are reserved for js... eg let

## summary

Variables are used in programming to store data that can be used and modified throughout a program. Variable names should follow specific naming conventions to make code easier to read and understand. The most common convention in JavaScript is camelCase, while PascalCase and snake_case are used in different situations.

## Data Types

## Primitive Data Types

### String

Stores text values.

```javascript
let name = "Faith";
```

### Number

Stores integers and decimal numbers.

```javascript
let age = 26;
let height = 158.5;
```

### Boolean

Stores true or false values.

```javascript
let faithisMarried = false;
console.log(faithisMarried);
```

### Undefined

A variable that has been declared but not assigned a value.

```javascript
let country;
console.log(country);
```

### Null

Represents an intentional absence of value.

```javascript
let nullval1 = null;
console.log(nullval1);
```

# Ways to Create a String Variable

## Double Quotes

```javascript
let str1 = "Wassup Yall";
```

## Single Quotes

```javascript
let str2 = "Wassup Yall";
```

## Backticks (Template Literals)

```javascript
let str3 = `Wassup Yall`;
```

# Difference Between Undefined and Null

## Undefined

- The variable exists but has no value assigned.
- JavaScript automatically assigns `undefined`.

```

## Null

- The variable has been intentionally assigned no value.
- Set by the programmer.


# Summary

`undefined` means a variable has not been given a value yet, while `null` means it was intentionally set to have no value.
```
