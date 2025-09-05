# Testing Documentation for NoOpVm

This directory contains comprehensive unit tests for the NoOpVm and ScopedNoOpVm classes using Vitest.

## Test Structure

### Main Test Files

- **`700654.test.ts`** - Core functionality tests for NoOpVm and ScopedNoOpVm
- **`700654.error-handling.test.ts`** - Comprehensive error handling and edge case tests  
- **`700654.integration.test.ts`** - Integration tests and complex usage scenarios
- **`setup.ts`** - Test setup and global mocks

## Test Coverage

### NoOpVm Core Tests

- **Constructor and Initialization**
  - Default values and VM type
  - Global object setup
  - Eval capability detection

- **Handle Operations** 
  - Wrapping and unwrapping values
  - Double wrapping prevention
  - Destroyed VM error handling

- **Type Checking Methods**
  - `isNumber`, `isString`, `isBoolean`, `isNull`, `isUndefined`
  - `isObject`, `isArray`, `isFunction`
  - `isArrayBuffer`, `isUint8Array`

- **Value Creation**
  - Number, string, boolean, symbol creation
  - Object and array creation
  - ArrayBuffer and Uint8Array handling
  - Type validation errors

- **Type Conversion**
  - `toNumber`, `toString`, `toBoolean`
  - Error handling for invalid conversions

- **Object Manipulation**
  - Property getting and setting
  - Object key enumeration
  - Property descriptor definition
  - Object freezing

- **Function Operations**
  - Function creation with custom logic
  - Function calling with proper context
  - Constructor calling
  - Error handling in function execution

- **Promise Operations**
  - Promise creation with resolve/reject handlers
  - Async operation simulation

- **Evaluation Operations**
  - Code evaluation (trusted and untrusted)
  - Top-level code evaluation
  - Syntax and runtime error handling

### ScopedNoOpVm Tests

- **Trusted Execution**
  - Trust state management
  - Restricted untrusted evaluation
  - Error recovery with trust state

- **Figma Context Switching**
  - Context isolation during evaluation
  - Proper context restoration
  - Error handling with context switching

### Error Handling Tests

- **Handle Validation**
  - Invalid handle detection
  - Null/primitive value handling
  - Destroyed VM state checks

- **Type Validation**
  - Detailed error messages for type mismatches
  - ArrayBuffer/Uint8Array validation
  - Value creation with wrong types

- **Function Execution Errors**
  - Nested function call errors
  - Constructor errors
  - Execution depth tracking

- **Evaluation Errors**
  - Syntax errors
  - Runtime errors
  - Reference errors

### Integration Tests

- **Complex Object Workflows**
  - Nested object creation and manipulation
  - Property descriptors with getters/setters
  - Circular reference handling

- **Function Composition**
  - Higher-order functions
  - Callback functions and closures
  - Array-like operations

- **Performance Tests**
  - Large number of handles
  - Deeply nested function calls
  - Rapid successive operations

- **Plugin Context Tests**
  - Full plugin lifecycle
  - Resource management
  - Multiple context isolation

## Running Tests

### Prerequisites

Make sure you have the required dependencies installed:

```bash
npm install
```

### Test Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests once with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui

# Run specific test file
npx vitest run src/__tests__/700654.test.ts

# Run tests matching pattern
npx vitest run --grep "NoOpVm"
```

### Coverage Reports

Coverage reports are generated in the `coverage/` directory and include:
- HTML report: `coverage/index.html`
- JSON report: `coverage/coverage.json` 
- Text summary in terminal

Target coverage thresholds:
- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

## Test Configuration

### Vitest Config (`vitest.config.ts`)

- **Environment**: jsdom for browser-like testing
- **Globals**: Enabled for describe/it/expect without imports
- **Setup**: Automatic setup file execution
- **Mocking**: Auto-reset, clear, and restore mocks

### Setup File (`setup.ts`)

- Global object mocking (window, localStorage, etc.)
- Console method mocking for cleaner output
- Mock utilities for common operations
- Performance and observer API mocks

## Mocking Strategy

### External Dependencies

- **`../905/572400`** - PluginError and PluginWrapper classes
- **`../905/823050`** - H function for JSX rendering

### Global Objects

- `window.figma` - Figma plugin API simulation
- Storage APIs - localStorage, sessionStorage
- Performance APIs - timing and measurement
- Observer APIs - IntersectionObserver, ResizeObserver

## Writing New Tests

### Test Structure

```typescript
describe('Feature Description', () => {
  let vm: NoOpVm;

  beforeEach(() => {
    vm = new NoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  it('should test specific behavior', () => {
    // Arrange
    const handle = vm.newString('test');
    
    // Act
    const result = vm.getString(handle);
    
    // Assert
    expect(result).toBe('test');
  });
});
```

### Best Practices

1. **Always clean up VMs** in afterEach to prevent memory leaks
2. **Test both success and error cases** for comprehensive coverage
3. **Use descriptive test names** that explain the expected behavior
4. **Group related tests** using nested describe blocks
5. **Mock external dependencies** to isolate units under test
6. **Test edge cases** like null values, empty arrays, etc.

### Common Test Patterns

```typescript
// Testing function calls
const fn = vm.newFunction('test', () => vm.newString('result'));
const result = vm.callFunction(fn, vm.undefined);
expect(result.type).toBe('SUCCESS');

// Testing error conditions
expect(() => vm.newNumber('not a number' as any)).toThrow();

// Testing async operations
const handlers = vm.newPromise<string>();
expect(typeof handlers.resolve).toBe('function');

// Testing eval operations
const result = vm.evalCode('1 + 2');
expect(result.type).toBe('SUCCESS');
if (result.handle) {
  expect(vm.getNumber(result.handle)).toBe(3);
}
```

## Debugging Tests

### Common Issues

1. **VM not destroyed** - Ensure afterEach properly cleans up
2. **Handle validation errors** - Check that values are properly wrapped
3. **Mock not working** - Verify mock setup in setup.ts
4. **Async test issues** - Use proper async/await patterns

### Debug Commands

```bash
# Run with verbose output
npx vitest run --reporter=verbose

# Run single test with full output
npx vitest run --reporter=verbose src/__tests__/700654.test.ts -t "specific test name"

# Debug mode (Node.js debugger)
npx vitest --inspect-brk
```

## Contributing

When adding new features to NoOpVm:

1. Add corresponding tests for new methods
2. Include both positive and negative test cases
3. Test error conditions and edge cases
4. Update this README if adding new test categories
5. Ensure coverage thresholds are maintained

## Performance Considerations

The integration tests include performance benchmarks:
- Handle creation should complete within reasonable time limits
- Memory usage should remain stable during large operations
- Error recovery should not impact subsequent operations

Monitor test execution times and adjust timeouts if needed for different environments.