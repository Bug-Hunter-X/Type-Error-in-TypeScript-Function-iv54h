# Type Error in TypeScript Function
This repository demonstrates a common type error in TypeScript functions that occurs when passing an argument of an incompatible type.

## Description
The `add` function is defined to accept two number arguments. However, the code attempts to call `add` with a string as the second argument. This results in a type error because TypeScript's type system prevents such incompatible operations.

## Solution
To fix the issue, ensure that all arguments passed to the `add` function are of the correct type (number in this case).  Explicit type checking or input validation can be used to prevent such errors.

## Files
* `bug.ts`: The original code demonstrating the error.
* `bugSolution.ts`: The corrected code that addresses the type error.