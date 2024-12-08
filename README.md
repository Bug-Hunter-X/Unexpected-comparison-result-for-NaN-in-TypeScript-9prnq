# Unexpected NaN Comparison in TypeScript

This repository demonstrates an uncommon bug related to comparing NaN values in TypeScript using a custom comparison function.  The `compare` function is designed to return -1, 0, or 1 based on the numerical comparison of two numbers.  However, when comparing `NaN` with `NaN`, it incorrectly returns 0, even though `NaN` is not equal to itself.

This bug highlights a subtle issue with the behavior of `NaN` in JavaScript and TypeScript.  The solution involves using `Number.isNaN()` for proper NaN comparison.

## How to Reproduce
1. Clone the repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` to observe the unexpected result.
4. Examine the improved version in `bugSolution.ts` and `node bugSolution.js` for a corrected implementation.