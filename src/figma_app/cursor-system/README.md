# Cursor System

A comprehensive, modular system for managing cursor interactions, animations, chat functionality, and particle effects in Figma.

## Overview

The Cursor System is a complete refactoring of the legacy cursor management code, transforming a monolithic 2000+ line file into a clean, modular architecture with clear separation of concerns.

## Architecture

```
cursor-system/
├── constants.ts          # Configuration and constants
├── types.ts             # TypeScript type definitions
├── utils.ts             # Utility functions
├── cursor-system.ts     # Main system orchestrator
├── wiggle-detector.ts   # Cursor wiggle/shake detection
├── particle-system.ts   # Animation and particle effects
├── collision-detector.ts # Cursor collision detection
├── chat/
│   ├── emote-system.ts     # Chat emotes and reactions
│   └── chat-animations.ts  # Text animation effects
└── index.ts             # Public API exports
```

## Key Features

### 🎯 **Cursor Interactions**
- Real-time cursor collision detection
- High-five animations between cursors
- Proximity-based effects and reactions

### 🎨 **Particle Effects**
- Sparkles, bubbles, and star particles
- Physics-based particle system
- Customizable animation keyframes

### 📳 **Wiggle Detection**
- Smart cursor shake/wiggle detection
- Configurable sensitivity and timing
- State management for wiggle mode

### 💬 **Chat System**
- Keyword-triggered emote reactions
- Background effects for special phrases
- Text rumble animations
- Support for FigJam-specific features

### ⚡ **Performance**
- Efficient collision detection algorithms
- Memory-conscious particle management
- Debounced updates and optimizations

## Quick Start

### Basic Usage

```typescript
import { createCursorSystem } from './cursor-system';

// Create a cursor system instance
const cursorSystem = createCursorSystem();

// Get individual components
const wiggleDetector = cursorSystem.getWiggleDetector();
const particleSystem = cursorSystem.getParticleSystem();
const emoteSystem = cursorSystem.getEmoteSystem();

// Start wiggle detection
wiggleDetector.setWiggleMode(true);

// Process chat input for emotes
const result = cursorSystem.processChatInput("fire!", true, trackEvent);
```

### React Integration

```typescript
import { useCursorSystem } from '../cursor-system-refactored';

function MyComponent() {
  const {
    cursorSystem,
    chatState,
    ChatAnimationWrapper,
    AISelectionBoxes
  } = useCursorSystem();

  return (
    <div>
      <ChatAnimationWrapper content={chatState.currentUserInput}>
        <input value={chatState.currentUserInput} />
      </ChatAnimationWrapper>
      
      <AISelectionBoxes viewportInfo={viewportInfo} />
    </div>
  );
}
```

## Core Components

### CursorSystem

The main orchestrator that coordinates all cursor-related functionality.

```typescript
const cursorSystem = createCursorSystem();

// Process cursor collisions
cursorSystem.processCursorCollisions(cursors, viewportInfo, pageId, sessionId);

// Handle chat effects
const result = cursorSystem.processChatInput(text, isFigJam, trackEvent);

// Update systems
cursorSystem.update(deltaTime);
cursorSystem.updateWithMouse(mousePosition, deltaTime);

// Cleanup
cursorSystem.dispose();
```

### WiggleDetector

Detects cursor wiggling and shaking patterns.

```typescript
const wiggleDetector = new WiggleDetector();

// Configure wiggle detection
wiggleDetector.setWiggleMode(true);
wiggleDetector.setMouseLeftCanvas(false);
wiggleDetector.setHighFiveKeyPressed(true);

// Get current state
const isWiggling = wiggleDetector.getWiggleMode();
const shakeFactor = wiggleDetector.getShakeFactor();
const aboutToHide = wiggleDetector.getAboutToHide();

// Subscribe to changes
const unsubscribe = wiggleDetector.onWiggleModeChange((wiggleMode) => {
  console.log('Wiggle mode changed:', wiggleMode);
});
```

### ParticleSystem

Manages animated particles and effects.

```typescript
const particleSystem = new ParticleSystem();

// Create different types of particles
const particle = new Particle({ x: 100, y: 100 });
const sparkle = new SparkleEntity({ x: 200, y: 200 });
const star = new StarParticle({ x: 300, y: 300 });

// Add to system
particleSystem.addParticle(particle);
particleSystem.addEntity(sparkle);

// Update and render
particleSystem.update(deltaTime);

// Get particles for rendering
const allParticles = particleSystem.getParticles();
```

### CollisionDetector

Handles cursor collision detection and proximity tracking.

```typescript
const collisionDetector = new CollisionDetector();

// Check for collisions
const newCollisions = collisionDetector.updateAndCheckCollisions(cursors);

// Process new collisions
newCollisions.forEach(({ cursor1, cursor2 }) => {
  console.log(`Collision between ${cursor1.sessionID} and ${cursor2.sessionID}`);
});

// Check specific collision
const areColliding = collisionDetector.areCursorsCurrentlyColliding(cursor1, cursor2);
```

### EmoteSystem

Manages chat emotes and keyword-triggered reactions.

```typescript
const emoteSystem = new EmoteSystem();

// Find background effects
const effect = emoteSystem.findBackgroundEffect("fire!");
if (effect) {
  console.log(`Background effect: ${effect.background}`);
}

// Send reaction emotes
emoteSystem.sendReactionEmotes("lol", trackEvent);

// Get available keywords
const backgroundKeywords = emoteSystem.getBackgroundEffectKeywords();
const reactionKeywords = emoteSystem.getReactionKeywords();
```

### ChatAnimationSystem

Handles text animations and rumble effects.

```typescript
const chatAnimations = new ChatAnimationSystem();

// Start rumble animation
chatAnimations.startRumbleAnimation(
  element, 
  exclamationCount, 
  () => console.log('Animation started!')
);

// Check animation state
const isAnimating = chatAnimations.isAnimating();
const intensity = chatAnimations.getAnimationIntensity();

// Stop animations
chatAnimations.stopRumbleAnimation();
```

## Configuration

### Constants

All system constants are centralized and well-documented:

```typescript
import {
  CURSOR_COLLISION_RADIUS,
  WIGGLE_MODE_TIMING,
  WIGGLE_MODE_MOVEMENT,
  WIGGLE_MODE_SHAKE,
  PARTICLE_SYSTEM,
  ANIMATION_TIMING,
  CHAT_ANIMATION,
  CURSOR_POSITIONING
} from './cursor-system';

// Example usage
const collisionRadius = CURSOR_COLLISION_RADIUS; // 80
const deactivationTime = WIGGLE_MODE_TIMING.DEACTIVATION_TIME; // 6 seconds
```

### Background Effects

```typescript
import { BackgroundEffectType } from './cursor-system';

// Available background effects
BackgroundEffectType.PINK_GRADIENT
BackgroundEffectType.ORANGE_GRADIENT
BackgroundEffectType.GRAY_BACKGROUND
BackgroundEffectType.GLARE_ANIMATION
BackgroundEffectType.NONE
```

## Utilities

The system includes comprehensive utility functions:

```typescript
import {
  calculateCursorTransform,
  isCursorValidForInteraction,
  calculateDistance,
  calculateMidpoint,
  lerp,
  clamp,
  debounce,
  throttle
} from './cursor-system';

// Calculate cursor positioning
const transform = calculateCursorTransform(position, isHandOnRight, zoomScale);

// Validate cursor
const isValid = isCursorValidForInteraction(cursor, pageId, sessionId);

// Math utilities
const distance = calculateDistance(pos1, pos2);
const midpoint = calculateMidpoint(pos1, pos2);
const interpolated = lerp(start, end, progress);
```

## TypeScript Support

The system is fully typed with comprehensive TypeScript definitions:

```typescript
import {
  Position,
  CursorState,
  ViewportInfo,
  ParticleVelocity,
  AnimationKeyframe,
  ChatState,
  EmoteKeywordMatch
} from './cursor-system';

// Type-safe cursor state
const cursor: CursorState = {
  sessionID: 'user123',
  deviceName: 'editor',
  mouse: {
    canvasSpacePosition: { x: 100, y: 200 },
    pageId: 'page1'
  },
  lastMouseMoveMs: Date.now()
};
```

## Performance

### Memory Management

```typescript
// Proper cleanup
const cursorSystem = createCursorSystem();

// Always dispose when done
useEffect(() => {
  return () => {
    cursorSystem.dispose();
  };
}, []);
```

### Optimization Features

- **Particle Limits**: Maximum particle count prevents memory bloat
- **Collision Optimization**: Efficient spatial partitioning
- **Debounced Updates**: Reduced unnecessary recalculations
- **Memoization**: Cached expensive computations

## Debugging

### Debug Information

```typescript
const debugInfo = cursorSystem.getDebugInfo();
console.log('System State:', {
  particleCount: debugInfo.particleCount,
  wiggleState: debugInfo.wiggleState,
  collisionCount: debugInfo.collisionCount,
  isAnimating: debugInfo.isAnimating
});
```

### Development Tools

```typescript
// Get detailed component state
const wiggleState = wiggleDetector.getDebugState();
const animationStates = chatAnimations.getAnimationPlayStates();
const particlesByType = particleSystem.getEntitiesByType('Particle');
```

## Testing

### Unit Tests

```typescript
import { WiggleDetector, ParticleSystem } from './cursor-system';

describe('WiggleDetector', () => {
  let detector: WiggleDetector;

  beforeEach(() => {
    detector = new WiggleDetector();
  });

  it('should detect wiggle mode', () => {
    detector.setWiggleMode(true);
    expect(detector.getWiggleMode()).toBe(true);
  });
});
```

### Integration Tests

```typescript
describe('CursorSystem Integration', () => {
  it('should handle complete workflow', () => {
    const cursorSystem = createCursorSystem();
    
    // Test cursor collisions
    cursorSystem.processCursorCollisions(mockCursors, viewportInfo, pageId, sessionId);
    
    // Test chat processing
    const result = cursorSystem.processChatInput("fire!", true, mockTrackEvent);
    
    expect(result.hasBackgroundEffect).toBe(true);
  });
});
```

## Migration from Legacy System

See [MIGRATION.md](./MIGRATION.md) for detailed migration instructions from the legacy `242062.ts` file.

### Quick Migration

```typescript
// Old way
import { ei, es, eo } from '../242062';
const system = ei();

// New way
import { createCursorSystem } from './cursor-system';
const cursorSystem = createCursorSystem();
```

## Contributing

### Code Style

- Use descriptive variable and function names
- Add comprehensive TypeScript types
- Include JSDoc comments for public APIs
- Write unit tests for new features

### Adding New Features

1. Define types in `types.ts`
2. Add constants to `constants.ts`
3. Implement core logic in appropriate module
4. Add utilities to `utils.ts` if needed
5. Export from `index.ts`
6. Update documentation

## API Reference

For complete API documentation, see the TypeScript definitions in each module:

- [Constants](./constants.ts) - Configuration values
- [Types](./types.ts) - TypeScript interfaces
- [Utils](./utils.ts) - Utility functions
- [CursorSystem](./cursor-system.ts) - Main system class
- [WiggleDetector](./wiggle-detector.ts) - Wiggle detection
- [ParticleSystem](./particle-system.ts) - Particle management
- [CollisionDetector](./collision-detector.ts) - Collision detection
- [EmoteSystem](./chat/emote-system.ts) - Chat emotes
- [ChatAnimationSystem](./chat/chat-animations.ts) - Text animations

## License

This cursor system is part of the Figma application and follows the same licensing terms.