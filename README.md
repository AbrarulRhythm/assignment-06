# ASSIGNMENT-006

### 🌐 [Click Here To See The Demo](https://abrarulrhythm.github.io/assignment-06/)
<br>

<img width="1200" height="700" alt="Image" src="https://github.com/user-attachments/assets/19018ee8-c8df-4d19-a958-41c952f791e2" />
<br>
<br>

#### ✅ Question 01: What is the difference between var, let, and const?
**Answer:**
<br>

**var**
1. Function scoped, accessible from anywhere inside the function where it is declared
2. Ignores block scope like if, for, ect
3. Hoisted to the top of its scope and initialized with undefined.
4. Can be redeclared and reassigned in the same scope.

**let**
1. Block scoped, accessible only inside the nearest block.
2. Hoisted to the top, but not initialized.
3. Using it before the declaration throws a ReferenceError (due to temporal dead zones).
4. Can be reassigned, but cannot be redeclared in the same scope.

**const**
1. Const is also block scoped, same as let.
2. Hoisted to the top, but not initialized.
3. Using it before the declaration throws a ReferenceError (due to temporal dead zones).
4. Cannot be redeclared and cannot be reassigned.
5. If the value is an object or array, the element can be changed.
 
#### ✅ Question 02: What is the difference between map(), forEach(), and filter()?
**Answer:**
<br>

**map()**
1. Returns a new array by operating on each element.
2. Does not change the old array
3. It is used when it is necessary to create a new array by changing the elements.

**forEach()**
1. Just loop and work on each element.
2. Does not return anything.
3. It is usually used for side effects like console.log, DOM updates, etc.

**filter()**
1. Tests each element, if the condition is true, places it in the array.
2. Filters all elements and returns a new array.

#### ✅ Question 03: What are arrow functions in ES6?
**Answer:** Arrow functions are a new syntax introduced in ES6 that makes writing functions smaller and cleaner. They are very convenient for single-line expressions, because they do not always have to write the function keyword or return keyword.

#### ✅ Question 04: How does destructuring assignment work in ES6?
**Answer:** Destructuring assignment is a feature introduced in ES6 that allows you to extract values ​​from an array or object into a separate variable using a very clean and short syntax. You can assign a default value, change the variable name, and even extract data from nested structures.

#### ✅ Question 05: Explain template literals in ES6. How are they different from string concatenation?
**Answer:** Template literals are a new string syntax introduced in ES6, written with a backtick (`). They allow you to write multi-line strings, and embed variables or expressions directly within a string using ${ }.

**Difference from String Concatenation**

**Syntax**
1. String Concatenation uses + to join separate strings.
2. Template literals can be used inside a backtick.

**Readability**
1. Template literals keep the code short and clean.
2. Concatenation requires a lot of +, which looks complicated.

**Multi line String**
1. To write multi-line in Concatenation, you need to give newline \n.
2. Multiple lines can be written directly in Template literals.

# ⚙️ Technology Stack

- HTML
- CSS
- JavaScript