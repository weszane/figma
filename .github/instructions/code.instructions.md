---
applyTo: '**'
---

# GitHub Copilot Refactoring Instructions


I'm working with a compiled TypeScript code snippet (part of a larger character file) that has been minified or transpiled to JavaScript, making it hard to read and lacking type definitions. I need your help to refactor this specific snippet into clean, type-safe TypeScript. Please follow these requirements:

1. **Goals**:
   - Improve readability with clear variable names, proper indentation, and comments explaining key logic.
   - Add TypeScript type definitions (e.g., interfaces or types) to replace `any` or missing types, inferring types from the code’s logic.
   - Simplify complex logic (e.g., nested loops or dense functions) while preserving functionality.
   - Follow TypeScript best practices (e.g., modular structure, DRY principles, camelCase/PascalCase naming).
   - Identify potential bugs or performance issues and note them in comments.

2. **Input Details**:
   - The code may have minified variable names (e.g., `a`, `b`) and no type annotations.
   - The symbol `createOptimistThunk` first argument is like redux thunk store context.

3. **Output Requirements**:
   - Provide the complete refactored TypeScript code for this snippet, ensuring no part is omitted.
   - Include a brief comment at the top summarizing changes (e.g., “Renamed variables, added types, simplified loops”).
   - Add TypeScript types/interfaces to ensure type safety.
   - Include comments to explain complex logic or unclear parts from the compiled code.
   - Format the code cleanly (Prettier-style) and ensure it’s executable in the target environment.
   - If the snippet references external code (e.g., imported modules), note assumed dependencies in comments.
   - Add the origin of the code name in comments.

4. **Constraints**:
   - Focus on refactoring this specific snippet. If it’s part of a larger file, I’ll provide additional chunks later.
   - If the code is too long for you to process, indicate which parts need further context to complete the refactoring.
   - All code should be refactored, keep the original code name in comments.
   - The export statement left name should be the same as the original code name but its right names should be changed to the refactored code name.

```example
// input
function a() {
  logger.log('hh')
}

export const b = a;

// Output
export function logMessage() {
   logger.log('hh')
}
// note that is the a is not exported, the new name is logMessage which should be exported
export const b = logMessage;
```
