# 🚀 Implementation Guide: Modular API Architecture

## Quick Start

This guide provides practical implementation details for using and extending the 27-module API architecture.

## 📁 Module Structure

Each module follows this consistent structure:

```typescript
class ExampleAPIModule {
   context: APIContext
   vmHandles = new Map<string, any>()

  constructor(context: APIContext) {
    this.context = context
  }

  /**
   * getAPI - Returns the public API for this module
   */
  getAPI() {
    return {
      // Public methods exposed to plugin developers
      exampleMethod: this.createExampleMethod(),
      anotherMethod: this.createAnotherMethod(),
    }
  }

  /**
   * createExampleMethod - VM-wrapped method example
   */
   createExampleMethod() {
    return this.context.defineVmFunction({
      metricsKey: 'example.exampleMethod',
      cb: (param1: any, param2: any) => {
        // Implementation logic here
        return this.context.vm.deepWrap(result)
      }
    })
  }

  /**
   * getMemoizedVMHandle - Performance-optimized handle caching
   */
   getMemoizedVMHandle(key: string, factory: () => any): any {
    if (!this.vmHandles.has(key)) {
      this.vmHandles.set(key, factory())
    }
    return this.vmHandles.get(key)
  }
}
```

## 🔧 Adding New Modules

### Step 1: Create Module Class

```typescript
class NewAPIModule {
   context: APIContext

  constructor(context: APIContext) {
    this.context = context
  }

  getAPI() {
    return {
      newFeature: this.createNewFeature(),
    }
  }

   createNewFeature() {
    return this.context.defineVmFunction({
      metricsKey: 'new.feature',
      cb: () => {
        // Implementation
        return this.context.vm.deepWrap('success')
      }
    })
  }
}
```

### Step 2: Add to Main Class

```typescript
class au {
  // Add module property
   newAPI: NewAPIModule

   initializeModules() {
    const context = this.createAPIContext()

    // Initialize new module
    this.newAPI = new NewAPIModule(context)
  }

  createAPIModular() {
    return {
      // Add to API surface
      newFeature: this.newAPI.getAPI(),
      // ... existing modules
    }
  }
}
```

## 🎯 Usage Examples

### Using the Storage Module

```typescript
// Plugin code
figma.clientStorage.setAsync('myKey', 'myValue')
  .then(() => figma.clientStorage.getAsync('myKey'))
  .then(value => console.log(value)) // 'myValue'
```

### Using the Node Module

```typescript
// Plugin code
const rect = figma.createRectangle()
rect.resize(100, 100)
rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
```

### Using the Variables Module

```typescript
// Plugin code
const colorVar = figma.variables.createVariable('Primary Color', 'local-collection')
const textNode = figma.createText()
textNode.fills = [{ type: 'SOLID', boundVariables: { color: colorVar } }]
```

## 🧪 Testing Modules

### Unit Test Example

```typescript
describe('StorageAPIModule', () => {
  let module: StorageAPIModule
  let mockContext: APIContext

  beforeEach(() => {
    mockContext = createMockAPIContext()
    module = new StorageAPIModule(mockContext)
  })

  it('should store and retrieve values', async () => {
    const api = module.getAPI()

    await api.setAsync('test-key', 'test-value')
    const result = await api.getAsync('test-key')

    expect(result).toBe('test-value')
  })
})
```

### Integration Test Example

```typescript
describe('Module Integration', () => {
  it('should work together seamlessly', () => {
    const au = new AuClass(mockOptions)
    const api = au.createAPIModular()

    // Test cross-module functionality
    const node = api.nodes.createRectangle()
    api.styles.applyFill(node, { type: 'SOLID', color: { r: 1, g: 0, b: 0 } })
    api.variables.bindVariable(node, 'fills', colorVariable)

    expect(node.fills[0].boundVariables.color).toBe(colorVariable)
  })
})
```

## 🔄 Module Communication

### Event-Based Communication

```typescript
class ModuleA {
  notifyOtherModules(data: any) {
    this.context.eventHandlers.get('moduleA.event')?.forEach((handler) => {
      handler(data)
    })
  }
}

class ModuleB {
  constructor(context: APIContext) {
    this.context = context

    // Listen for events from ModuleA
    this.context.addEventHandlersTo(
      this.context.vm,
      ['moduleA.event'],
      'moduleB',
      {
        handler: (data: any) => {
          this.handleModuleAEvent(data)
        }
      }
    )
  }

   handleModuleAEvent(data: any) {
    // React to ModuleA events
  }
}
```

### Shared State Management

```typescript
class SharedStateModule {
   state = new Map<string, any>()

  getAPI() {
    return {
      setState: (key: string, value: any) => {
        this.state.set(key, value)
        this.notifyStateChange(key, value)
      },

      getState: (key: string) => {
        return this.state.get(key)
      },

      subscribeToState: (key: string, callback: (value: any) => void) => {
        // Implementation for state subscriptions
      }
    }
  }
}
```

## ⚡ Performance Optimization

### Memoization Pattern

```typescript
class OptimizedModule {
   cache = new Map<string, any>()

   getCachedResult(key: string, computation: () => any): any {
    if (!this.cache.has(key)) {
      this.cache.set(key, computation())
    }
    return this.cache.get(key)
  }

  expensiveOperation(params: any) {
    const cacheKey = JSON.stringify(params)
    return this.getCachedResult(cacheKey, () => {
      // Expensive computation here
      return computeResult(params)
    })
  }
}
```

### Lazy Loading

```typescript
class LazyModule {
   _heavyFeature: any = null

   getHeavyFeature() {
    if (!this._heavyFeature) {
      this._heavyFeature = this.initializeHeavyFeature()
    }
    return this._heavyFeature
  }

  useHeavyFeature() {
    const feature = this.getHeavyFeature()
    return feature.doSomething()
  }
}
```

## 🛠️ Debugging and Monitoring

### Module Health Checks

```typescript
class HealthCheckModule {
  getAPI() {
    return {
      checkHealth: () => {
        const health = {
          modules: this.checkAllModules(),
          memory: this.getMemoryUsage(),
          performance: this.getPerformanceMetrics()
        }
        return this.context.vm.deepWrap(health)
      }
    }
  }

   checkAllModules(): ModuleHealth[] {
    return [
      this.checkModule('core', this.context.coreAPI),
      this.checkModule('storage', this.context.storageAPI),
      // ... check all modules
    ]
  }
}
```

### Performance Monitoring

```typescript
class PerformanceModule {
   metrics = new Map<string, PerformanceMetric>()

  measureOperation<T>(name: string, operation: () => T): T {
    const start = performance.now()
    try {
      const result = operation()
      this.recordMetric(name, performance.now() - start, 'success')
      return result
    }
    catch (error) {
      this.recordMetric(name, performance.now() - start, 'error')
      throw error
    }
  }

   recordMetric(name: string, duration: number, status: string) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, {
        totalCalls: 0,
        totalDuration: 0,
        averageDuration: 0,
        successCount: 0,
        errorCount: 0
      })
    }

    const metric = this.metrics.get(name)!
    metric.totalCalls++
    metric.totalDuration += duration
    metric.averageDuration = metric.totalDuration / metric.totalCalls

    if (status === 'success') {
      metric.successCount++
    }
    else {
      metric.errorCount++
    }
  }
}
```

## 📝 Best Practices

### 1. Module Design

- Keep modules focused on single responsibility
- Use dependency injection for testability
- Implement proper error handling
- Cache expensive operations

### 2. API Design

- Use consistent naming conventions
- Provide clear documentation for all public methods
- Follow async/await patterns for async operations
- Return VM-wrapped objects for plugin compatibility

### 3. Testing

- Write unit tests for each module
- Create integration tests for module interactions
- Mock external dependencies
- Test error conditions and edge cases

### 4. Performance

- Use memoization for expensive computations
- Implement lazy loading for heavy features
- Monitor memory usage and clean up resources
- Profile critical code paths

## 🔮 Extension Points

The modular architecture provides several extension points:

1. **New Modules**: Add specialized functionality
2. **Module Enhancers**: Extend existing module capabilities
3. **Plugin System**: Allow third-party module extensions
4. **Event System**: Enable loose coupling between modules
5. **Middleware**: Add cross-cutting concerns

This architecture provides a solid foundation for building scalable, maintainable plugin APIs that can grow and evolve with your needs.
