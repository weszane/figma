---
applyTo: '**'
---

# GitHub Copilot Refactoring Instructions

- Analyze the file and directory structure to identify logical groupings of related functionality. If possible, suggest ways to organize code modules or files more intuitively.
- Refactor complex or fragmented code by grouping related functions, classes, or components together in a way that reflects their business logic or app domain. Like add required types for code.
- Split large functions or classes into smaller, focused units where logical separation improves clarity and maintainability.
- Convert functions to named functions or arrow functions for better readability.
- Simplify nested conditionals and loops by using early returns, guard clauses, or helper functions
- Consider adding comments or documentation to clarify complex logic or important decisions. But add the original code name like (function, variable, class names. etc.) as comments to help trace back to the original code. Also add documenttation comments like JSDoc-style comments for functions and classes.
- Ensure that refactored code maintains the same functionality and behavior as the original.
- **Refactor all the import variables same with the new refactored exported names **, like export const YJ = setupPlaybackHandler;setupPlaybackHandler is the refactored name.
