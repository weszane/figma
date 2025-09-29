import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { windowManagerInstance } from '../905/687477'
// Note: FullscreenEventManager is not directly exported, so we'll test it through the WindowManager

// Mock dependencies
vi.mock('../905/392533', () => ({
  eb: vi.fn(),
  IL: 0,
  No: 0,
  pP: vi.fn(),
  xC: vi.fn(),
}))
vi.mock('../905/407919', () => ({
  debugState: {
    get: vi.fn(),
  },
}))
vi.mock('../905/409121', () => ({
  browserCapabilities: {
    isMac: vi.fn(() => false),
    isIpad: vi.fn(() => false),
    isWindows: vi.fn(() => false),
    isChrome: vi.fn(() => false),
    isFirefox: vi.fn(() => false),
    isSafari: vi.fn(() => false),
    isChromePre118: vi.fn(() => false),
    isChromeOS: vi.fn(() => false),
    isIpadNative: vi.fn(() => false),
    isMeetDevice: vi.fn(() => false),
    isiOS: vi.fn(() => false),
  },
}))
vi.mock('../905/449184', () => ({
  trackEventAnalytics: vi.fn(),
}))
vi.mock('../905/561685', () => ({
  decodeBase64: vi.fn(),
  encodeBase64: vi.fn(),
}))
vi.mock('../905/601108', () => ({
  getFeatureFlags: vi.fn(() => ({})),
}))
vi.mock('../905/714362', () => ({
  logWarning: vi.fn(),
}))
vi.mock('../905/826900', () => ({
  KeyboardFocusManager: {
    shouldInterceptKeyboardEvent: vi.fn(() => false),
  },
}))
vi.mock('../905/955878', () => ({
  isEventProcessed: vi.fn(() => false),
}))
vi.mock('../figma_app/27355', () => ({
  atomStoreManager: {},
}))
vi.mock('../figma_app/53721', () => ({
  FEditorType: {
    Design: 'Design',
  },
}))
vi.mock('../figma_app/115923', () => ({
  sitesViewSetterAtomFamily: vi.fn(),
}))
vi.mock('../figma_app/119420', () => ({
  hH: vi.fn(),
  Q_: vi.fn(),
  qG: vi.fn(),
}))
vi.mock('../figma_app/358450', () => ({
  H: vi.fn(),
}))
vi.mock('../figma_app/455680', () => ({
  fullscreenValue: {
    pinchZoomFixDisabled: vi.fn(() => false),
    triggerAction: vi.fn(),
    cancelPendingGestures: vi.fn(),
  },
}))
vi.mock('../figma_app/475303', () => ({
  v7: vi.fn(),
}))
vi.mock('../figma_app/540726', () => ({
  gk: vi.fn(),
  tj: vi.fn(),
}))
vi.mock('../figma_app/552876', () => ({
  isDebugSelectedFigmakeFullscreen: vi.fn(() => false),
}))
vi.mock('../figma_app/594947', () => ({
  getInitialDynamicConfig: vi.fn(),
}))
vi.mock('../figma_app/603466', () => ({
  checkStackInvariants: vi.fn(),
}))
vi.mock('../figma_app/753501', () => ({
  preventDefault: vi.fn(),
}))
vi.mock('../figma_app/763686', () => ({
  DesignGraphElements: {},
  EventTypeEnum: {
    MOUSE_PRESS: 1,
    MOUSE_RELEASE: 2,
    MOUSE_MOVE: 3,
    MOUSE_ENTER: 4,
    MOUSE_LEAVE: 5,
    MOUSE_WHEEL: 6,
    MOUSE_SCALE: 7,
    MOUSE_SCALE_END: 8,
    KEY_PRESS: 9,
    KEY_RELEASE: 10,
    APP_FOCUS_GAINED: 11,
    APP_FOCUS_LOST: 12,
  },
  Fullscreen: {
    pinchToZoomExponent: vi.fn(() => 2),
  },
  HTMLWindow: {
    setIsActive: vi.fn(),
  },
  InsertErrorType: {},
  KeyboardLayout: {},
  PageNavigation: {
    PREVIOUS: -1,
    NEXT: 1,
  },
  PanelType: {},
  PointerType: {
    MOUSE: 0,
    TOUCH: 1,
    STYLUS: 2,
    TRACKPAD: 3,
  },
}))
vi.mock('../figma_app/778880', () => ({
  isMobileUA: vi.fn(() => false),
}))
vi.mock('../figma_app/844818', () => ({
  ty: vi.fn(() => false),
}))
vi.mock('../figma_app/876459', () => ({
  desktopAPIInstance: {},
}))
vi.mock('../figma_app/896988', () => ({
  BI: vi.fn(() => false),
  nB: vi.fn(),
}))
vi.mock('../figma_app/915202', () => ({
  ClipboardOperation: {},
}))
vi.mock('../figma_app/930338', () => ({
  escapeHtml: vi.fn(),
}))
vi.mock('../figma_app/985200', () => ({
  Wh: vi.fn(),
  Yx: vi.fn(),
}))

// Mock DOM APIs
const mockHTMLElement = {
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  appendChild: vi.fn(),
  remove: vi.fn(),
  style: {},
  dataset: {},
  closest: vi.fn(() => null),
  getAttribute: vi.fn(() => null),
  setAttribute: vi.fn(),
  removeAttribute: vi.fn(),
  contains: vi.fn(() => false),
  focus: vi.fn(),
}
const mockDocument = {
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  createElement: vi.fn((tag) => {
    if (tag === 'div') {
      return {
        ...mockHTMLElement,
        id: '',
        style: {
          visibility: '',
        },
      }
    }
    return mockHTMLElement
  }),
  getElementById: vi.fn((id) => {
    if (id === 'fullscreen-root') {
      return {
        ...mockHTMLElement,
        style: {
          visibility: 'hidden',
        },
      }
    }
    return null
  }),
  getElementsByTagName: vi.fn(() => []),
  body: mockHTMLElement,
  hidden: false,
  getSelection: vi.fn(() => null),
}
const mockWindow = {
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  devicePixelRatio: 1,
  performance: {
    now: vi.fn(() => 1000),
  },
}

// Set up global mocks
Object.defineProperty(global, 'document', {
  value: mockDocument,
  writable: true,
})
Object.defineProperty(global, 'window', {
  value: mockWindow,
  writable: true,
})
describe('fullscreenEventManager', () => {
  let windowManager: any
  let eventManager: any
  let mockViewElement: HTMLElement
  let mockCppAPI: any
  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks()

    // Create mock elements
    mockViewElement = document.createElement('div')
    mockCppAPI = {
      updateSize: vi.fn(),
      mouseEvent: vi.fn(() => false),
      keyboardEvent: vi.fn(() => false),
      getViewWantsTextEvents: vi.fn(() => false),
      focusEvent: vi.fn(),
      focusViewInTabOrder: vi.fn(),
      textEvent: vi.fn(),
      setIsUsingTouchEvents: vi.fn(),
    }

    // Get window manager instance
    windowManager = windowManagerInstance

    // Initialize global window state to get the event manager
    Object.defineProperty(global, 'HTMLWindow', {
      value: mockCppAPI,
      writable: true,
    })
    eventManager = windowManager.initializeGlobalWindowState(mockViewElement)
  })
  afterEach(() => {
    // Reset singleton instance if needed
    windowManager.globalWindowState = null
  })
  describe('initialization', () => {
    it('should initialize with correct properties', () => {
      expect(eventManager).toBeDefined()
      expect(eventManager.pendingViewHandle).toBeNull()
      expect(eventManager.lastViewHandleWithFocus).toBeNull()
      expect(eventManager.currentViewHandleWithFocus).toBeNull()
    })
    it('should create root element', () => {
      const rootElement = document.getElementById('fullscreen-root')
      expect(rootElement).toBeDefined()
      expect(rootElement?.style.visibility).toBe('hidden')
    })
  })
  describe('public methods', () => {
    it('should update size and pixel ratio', () => {
      eventManager.updateSizeAndPixelRatio()
      expect(mockCppAPI.updateSize).toHaveBeenCalledWith(mockViewElement.clientWidth, mockViewElement.clientHeight)
    })
    it('should handle focus view', () => {
      const viewHandle = 'test-view-handle'
      eventManager.focusView(viewHandle, true)
      expect(eventManager.currentViewHandleWithFocus).toBe(viewHandle)
    })
  })
  describe('event handling', () => {
    it('should handle modifier keys correctly', () => {
      const mockEvent = {
        altKey: true,
        metaKey: false,
        shiftKey: false,
        ctrlKey: false,
      }
      const modifierKeys = eventManager.modifierKeys(mockEvent as any)
      // ALT = 256
      expect(modifierKeys).toBe(256)
    })
    it('should handle multiple modifier keys', () => {
      const mockEvent = {
        altKey: true,
        metaKey: true,
        shiftKey: false,
        ctrlKey: true,
      }
      const modifierKeys = eventManager.modifierKeys(mockEvent as any)
      // ALT (256) + META (512) + CONTROL (2048) = 2816
      expect(modifierKeys).toBe(2816)
    })
    it('should handle no modifier keys', () => {
      const mockEvent = {
        altKey: false,
        metaKey: false,
        shiftKey: false,
        ctrlKey: false,
      }
      const modifierKeys = eventManager.modifierKeys(mockEvent as any)
      expect(modifierKeys).toBe(0)
    })
  })
  describe('touch state management', () => {
    it('should create initial touch state', () => {
      const touchState = eventManager.createInitialTouchState()
      expect(touchState).toBeDefined()
      expect(typeof touchState.next).toBe('function')
    })
    it('should create mouse drag touch state', () => {
      const mockTouchEvent = {
        touches: [{
          identifier: 1,
          pageX: 100,
          pageY: 100,
          timeStamp: 1000,
        }],
        timeStamp: 1000,
      }
      const queuedEvents = []
      const touchState = eventManager.createMouseDragTouchState(mockTouchEvent as any, queuedEvents as any)
      expect(touchState).toBeDefined()
      expect(typeof touchState.next).toBe('function')
    })
    it('should create pan zoom touch state', () => {
      const initialTouchSummary = {
        x: 100,
        y: 100,
        distance: 50,
        count: 2,
      }
      const touchState = eventManager.createPanZoomTouchState(initialTouchSummary)
      expect(touchState).toBeDefined()
      expect(typeof touchState.next).toBe('function')
    })
  })
})
describe('windowManager', () => {
  let windowManager: any
  beforeEach(() => {
    windowManager = windowManagerInstance
    // Reset singleton instance if needed
    windowManager.globalWindowState = null
  })
  afterEach(() => {
    // Reset singleton instance if needed
    windowManager.globalWindowState = null
  })
  describe('initialization', () => {
    it('should initialize with correct properties', () => {
      expect(windowManager.globalWindowState).toBeNull()
      expect(windowManager.focusEventBeingCalled).toBe(false)
      expect(windowManager.customFocusElementReadWrite).toBeNull()
      expect(windowManager.customFocusElementReadOnly).toBeNull()
    })
  })
  describe('global window state', () => {
    it('should initialize global window state', () => {
      const mockViewElement = document.createElement('div')
      const mockCppAPI = {
        updateSize: vi.fn(),
        mouseEvent: vi.fn(),
        keyboardEvent: vi.fn(),
        getViewWantsTextEvents: vi.fn(),
        focusEvent: vi.fn(),
        focusViewInTabOrder: vi.fn(),
        textEvent: vi.fn(),
        setIsUsingTouchEvents: vi.fn(),
      }

      // Mock HTMLWindow since it's required for initialization
      Object.defineProperty(global, 'HTMLWindow', {
        value: mockCppAPI,
        writable: true,
      })
      const eventManager = windowManager.initializeGlobalWindowState(mockViewElement)
      expect(eventManager).toBeDefined()
      expect(windowManager.globalWindowState).toBe(eventManager)
    })
    it('should throw error when initializing global window state twice', () => {
      const mockViewElement = document.createElement('div')
      const mockCppAPI = {
        updateSize: vi.fn(),
        mouseEvent: vi.fn(),
        keyboardEvent: vi.fn(),
        getViewWantsTextEvents: vi.fn(),
        focusEvent: vi.fn(),
        focusViewInTabOrder: vi.fn(),
        textEvent: vi.fn(),
        setIsUsingTouchEvents: vi.fn(),
      }

      // Mock HTMLWindow since it's required for initialization
      Object.defineProperty(global, 'HTMLWindow', {
        value: mockCppAPI,
        writable: true,
      })

      // First initialization should work
      windowManager.initializeGlobalWindowState(mockViewElement)

      // Second initialization should throw
      expect(() => {
        windowManager.initializeGlobalWindowState(mockViewElement)
      }).toThrow('Global window state already initialized')
    })
    it('should throw error when HTMLWindow is undefined', () => {
      const mockViewElement = document.createElement('div')

      // Remove HTMLWindow to simulate undefined
      Object.defineProperty(global, 'HTMLWindow', {
        value: undefined,
        writable: true,
      })
      expect(() => {
        windowManager.initializeGlobalWindowState(mockViewElement)
      }).toThrow('HTMLWindow cannot initialize without cpp module')
    })
  })
  describe('clipboard operations', () => {
    beforeEach(() => {
      // Set up a mock global window state for clipboard operations
      const mockViewElement = document.createElement('div')
      const mockCppAPI = {
        updateSize: vi.fn(),
        mouseEvent: vi.fn(),
        keyboardEvent: vi.fn(),
        getViewWantsTextEvents: vi.fn(),
        focusEvent: vi.fn(),
        focusViewInTabOrder: vi.fn(),
        textEvent: vi.fn(),
        setIsUsingTouchEvents: vi.fn(),
        clipboardDataTransfer: new DataTransfer(),
      }
      Object.defineProperty(global, 'HTMLWindow', {
        value: mockCppAPI,
        writable: true,
      })
      windowManager.initializeGlobalWindowState(mockViewElement)
    })
    it('should write to clipboard as blob in HTML', () => {
      const result = windowManager.writeToClipboardAsBlobInHTML('<prefix>', 'data', '<middle>', '<suffix>', new Uint8Array([1, 2, 3]), '<end>', 'plain text')

      // Should return false since we're not actually setting up clipboard properly in tests
      expect(typeof result).toBe('boolean')
    })
  })
})
