# Scope and Variable Declarations

This short guide explains the differences in scope for `var`, `let`, and `const` in JavaScript with small examples and the expected console output.

## What is scope?

- Scope of a variable refers to the availability of that variable in our code.
- `var` declarations are function scoped.
- `let` and `const` declarations are block scoped.

## Examples

1. `var` declaration (function scoped)

```js
function addNumbers() {
  var a = 10;
  var b = 20;
  var flag = true;
  if (flag) {
    var sum = a + b;
    console.log('Inside if block', sum);
  }
  console.log('Outside if block', sum);
}

addNumbers();
```

What's logged to the console?

- Inside the `if` block: `Inside if block 30`
- Outside the `if` block: `Outside if block 30`

Reason: `var` is function scoped, so `sum` declared inside the `if` is hoisted to the function scope and is available outside the block.

2. `let` declaration (block scoped)

```js
function addNumbers() {
  let a = 10;
  let b = 20;
  let flag = true;
  if (flag) {
    let sum = a + b;
    console.log('Inside if block', sum);
  }
  console.log('Outside if block', sum);
}

addNumbers();
```

What's logged to the console?

- Line with `console.log` inside the `if` block: `Inside if block 30`
- The `console.log` outside the `if` block throws: `ReferenceError: sum is not defined`

Reason: `sum` was declared with `let` inside the `if` block, so it's not available outside that block.

3. `const` declaration (block scoped)

```js
function addNumbers() {
  const a = 10;
  const b = 20;
  const flag = true;
  if (flag) {
    const sum = a + b;
    console.log('Inside if block', sum);
  }
  console.log('Outside if block', sum);
}

addNumbers();
```

What's logged to the console?

- Inside the `if` block: `Inside if block 30`
- Outside the `if` block: `ReferenceError: sum is not defined`

Reason: `const` is also block scoped (like `let`).

## Summary

- Use `let` and `const` for predictable block scoping.
- Prefer `const` when you don't plan to reassign the variable, and `let` when reassignment is needed.
- Avoid `var` in modern code to prevent accidental leakage to function scope.

### Let vs Const

- Both behave the same w.r.t scope and hoisting.
- All `const` declarations must be initialized and, once initialized, cannot be reassigned to a new value.
