import { afterAll, afterEach, beforeEach, vi } from 'vitest';

// Mock global objects that might be used in tests
global.window = Object.assign(global.window || {}, {
  figma: {
    mock: 'figma',
    ui: {},
    clientStorage: {},
  },
  localStorage: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  sessionStorage: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  },
  location: {
    href: 'http://localhost:3000',
    origin: 'http://localhost:3000',
  },
});

// Mock console methods to reduce noise in tests unless specifically testing them
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeEach(() => {
  // Reset console mocks before each test
  console.error = vi.fn();
  console.warn = vi.fn();
});

afterEach(() => {
  // Clean up any side effects
  vi.clearAllMocks();
});

afterAll(() => {
  // Restore original console methods
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});

// Global test utilities
global.createMockHandle = (value: any) => ({
  [Symbol.for('internal')]: value,
});

// Mock fetch for any network calls
global.fetch = vi.fn();

// Mock performance API
global.performance = Object.assign(global.performance || {}, {
  now: vi.fn(() => Date.now()),
  mark: vi.fn(),
  measure: vi.fn(),
});

// Mock IntersectionObserver
// global.IntersectionObserver = vi.fn(() => ({
//   observe: vi.fn(),
//   disconnect: vi.fn(),
//   unobserve: vi.fn(),
// }));

// Mock ResizeObserver
global.ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
}));
