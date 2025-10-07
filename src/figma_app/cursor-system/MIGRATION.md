# Cursor System Migration Guide

This document provides a comprehensive guide for migrating from the legacy cursor system (`242062.ts`) to the new modular cursor system architecture.

## Overview

The original `242062.ts` file was a monolithic 2000+ line file with poor naming conventions and mixed concerns. The new system breaks this into focused, well-named modules with clear responsibilities.

## Key Improvements

### 1. **Better Code Organization**
- **Before**: Single 2000+ line file with mixed concerns
- **After**: Modular architecture with separate files for each concern

### 2. **Improved Naming Conventions**
- **Before**: Single letter variables (`n`, `u`, `R`, `L`, `D`) and cryptic function names (`ei`, `es`, `eo`)
- **After**: Descriptive names (`WiggleDetector`, `ParticleSystem`, `CollisionDetector`)

### 3. **Clear Separation of Concerns**
- **Cursor System**: Main orchestrator
- **Particle System**: Handles animations and effects
- **Collision Detection**: Manages cursor interactions
- **Wiggle Detection**: Detects cursor shake patterns
- **Chat System**: Handles emotes and text effects
- **Utilities**: Helper functions and calculations

### 4. **TypeScript Type Safety**
- Comprehensive type definitions
- Better IntelliSense support
- Compile-time error checking

## Migration Steps

### Step 1: Update Imports

**Before:**
```typescript
// From the old monolithic file
import { ei, es, eo, el, ed, e_, eh, em } from '../242062';
```

**After:**
```typescript
// New modular imports
import {
  CursorSystem,
  createCursorSystem,
  WiggleDetector,
  ParticleSystem,
  CollisionDetector,
  EmoteSystem,
  ChatAnimationSystem
} from '../cursor-system';
```

### Step 2: Replace Factory Functions

**Before:**
```typescript
function ei() {
  return {
    cursorWiggleDetector: new en(),
    cursorEntitySystem: new H(),
    cursorCollisionDetector: new X(),
    cursorKinematics: new _$$p2()
  };
}
```

**After:**
```typescript
function createCursorSystemComponents() {
  const system = createCursorSystem();
  return system.getComponents();
}
```

### Step 3: Update Component Usage

**Before:**
```typescript
// Old unclear usage
const system = ei();
system.cursorWiggleDetector.setWiggleMode(true);
```

**After:**
```typescript
// New clear usage
const cursorSystem = createCursorSystem();
const wiggleDetector = cursorSystem.getWiggleDetector();
wiggleDetector.setWiggleMode(true);
```

### Step 4: Migrate Constants

**Before:**
```typescript
// Scattered magic numbers and unclear names
en.WIGGLE_MODE_DEACTIVATION_TIME = 6;
en.WIGGLE_MODE_ABOUT_TO_HIDE_TIME = 3;
X.CURSOR_COLLISION_RADIUS = 80;
```

**After:**
```typescript
// Organized constants
import {
  WIGGLE_MODE_TIMING,
  CURSOR_COLLISION_RADIUS
} from '../cursor-system';

// Usage
const deactivationTime = WIGGLE_MODE_TIMING.DEACTIVATION_TIME;
const collisionRadius = CURSOR_COLLISION_RADIUS;
```

### Step 5: Update Chat Functionality

**Before:**
```typescript
// Old emote handling
eS(value, P.Standard, trackEvent);
let { key, background } = ev(value) ?? {};
```

**After:**
```typescript
// New emote system
const emoteSystem = cursorSystem.getEmoteSystem();
const effectResult = emoteSystem.findBackgroundEffect(value);
emoteSystem.sendReactionEmotes(value, trackEvent);
```

### Step 6: Replace Animation Logic

**Before:**
```typescript
// Old animation creation
function em(e, t) {
  let r = 3 * e;
  let n = 3 * e;
  // ... complex animation logic
}
```

**After:**
```typescript
// New animation system
const chatAnimations = cursorSystem.getChatAnimationSystem();
chatAnimations.startRumbleAnimation(element, exclamationCount, onTriggered);
```

## Component-by-Component Migration

### Wiggle Detection

**Before:**
```typescript
class en {
  constructor() {
    this.wiggleMeter = 0;
    this.wiggleMode = false;
    // ... many unclear properties
  }
  // ... unclear methods
}
```

**After:**
```typescript
import { WiggleDetector } from '../cursor-system';

const wiggleDetector = new WiggleDetector();
wiggleDetector.setWiggleMode(true);
const isWiggling = wiggleDetector.getWiggleMode();
```

### Particle System

**Before:**
```typescript
class V extends _$$w {
  // unclear inheritance and properties
}
class H extends _$$L {
  // unclear particle management
}
```

**After:**
```typescript
import { ParticleSystem, Particle, SparkleEntity } from '../cursor-system';

const particleSystem = new ParticleSystem();
const particle = new Particle({ x: 100, y: 100 });
particleSystem.addParticle(particle);
```

### Collision Detection

**Before:**
```typescript
let X = class e {
  updateAndCheckCollisions(t) {
    // unclear collision logic
  }
};
X.CURSOR_COLLISION_RADIUS = 80;
```

**After:**
```typescript
import { CollisionDetector } from '../cursor-system';

const collisionDetector = new CollisionDetector();
const newCollisions = collisionDetector.updateAndCheckCollisions(cursors);
```

## Breaking Changes

### 1. **Function Names**
- `ei()` → `createCursorSystem()`
- `es()` → `calculateCursorTransform()`
- `eo()` → `hasAnimatedCursorForSession()`
- `el()` → `isCursorValidForInteraction()`

### 2. **Class Names**
- `en` → `WiggleDetector`
- `V` → `Particle`
- `H` → `ParticleSystem`
- `X` → `CollisionDetector`

### 3. **Constants**
- Single letter variables → Named constant objects
- `R` → Background effect keywords map (moved to EmoteSystem)
- `L` → Emote reactions map (moved to EmoteSystem)

### 4. **Property Access**
- Direct property access → Getter/setter methods
- `detector.wiggleMode` → `detector.getWiggleMode()`

## Testing Migration

### Unit Tests

**Before:**
```typescript
// Hard to test due to coupling
const system = ei();
// ... complex setup
```

**After:**
```typescript
// Easy to test individual components
import { WiggleDetector } from '../cursor-system';

describe('WiggleDetector', () => {
  it('should detect wiggle mode', () => {
    const detector = new WiggleDetector();
    detector.setWiggleMode(true);
    expect(detector.getWiggleMode()).toBe(true);
  });
});
```

### Integration Tests

Test the complete cursor system:

```typescript
import { createCursorSystem } from '../cursor-system';

describe('CursorSystem Integration', () => {
  let cursorSystem;

  beforeEach(() => {
    cursorSystem = createCursorSystem();
  });

  it('should handle cursor collisions', () => {
    const cursors = [/* mock cursor data */];
    cursorSystem.processCursorCollisions(cursors, viewportInfo, pageId, sessionId);
    // Assert expected behavior
  });
});
```

## Performance Considerations

### Memory Management

The new system provides better memory management:

```typescript
// Proper cleanup
const cursorSystem = createCursorSystem();

// When component unmounts
useEffect(() => {
  return () => {
    cursorSystem.dispose();
  };
}, []);
```

### Optimization Features

- **Memoization**: Better caching of expensive calculations
- **Debouncing**: Reduced unnecessary updates
- **Lazy Loading**: Components only created when needed

## Debugging and Development

### Debug Information

**Before:**
```typescript
// Hard to debug with unclear state
console.log(system.cursorWiggleDetector.wiggleMeter);
```

**After:**
```typescript
// Clear debug information
const debugInfo = cursorSystem.getDebugInfo();
console.log('Cursor System Debug:', debugInfo);
```

### Development Tools

- Better TypeScript support
- Clear error messages
- Comprehensive logging

## Common Pitfalls

### 1. **Forgetting to Initialize**
```typescript
// Wrong: Using components before initialization
const wiggleDetector = new WiggleDetector();
wiggleDetector.update(); // May fail without proper setup

// Right: Use the system factory
const cursorSystem = createCursorSystem();
const wiggleDetector = cursorSystem.getWiggleDetector();
```

### 2. **Not Cleaning Up**
```typescript
// Wrong: Memory leaks
const cursorSystem = createCursorSystem();
// Component unmounts without cleanup

// Right: Proper cleanup
useEffect(() => {
  const cursorSystem = createCursorSystem();
  return () => cursorSystem.dispose();
}, []);
```

### 3. **Direct State Mutation**
```typescript
// Wrong: Direct mutation (not possible anymore)
system.wiggleDetector.wiggleMode = true;

// Right: Use proper methods
system.getWiggleDetector().setWiggleMode(true);
```

## Support and Resources

### Documentation
- [Cursor System API Reference](./API.md)
- [TypeScript Type Definitions](./types.ts)
- [Examples and Recipes](./examples/)

### Getting Help
- Check the type definitions for available methods
- Use the debug utilities for troubleshooting
- Refer to unit tests for usage examples

## Timeline and Rollout

### Phase 1: Parallel Implementation
- New system runs alongside old system
- Gradual migration of components
- Feature parity verification

### Phase 2: Migration
- Replace old imports with new ones
- Update component usage
- Test thoroughly

### Phase 3: Cleanup
- Remove old system files
- Update documentation
- Performance optimization

## Conclusion

The new cursor system provides:
- ✅ Better maintainability
- ✅ Improved type safety
- ✅ Clearer code organization
- ✅ Easier testing
- ✅ Better performance
- ✅ Enhanced debugging capabilities

While migration requires effort, the benefits far outweigh the costs, resulting in a more maintainable and robust codebase.