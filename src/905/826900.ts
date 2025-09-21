import { PureComponent } from 'react'
import { jsx } from 'react/jsx-runtime'
import { isFullscreenInterceptElement } from '../905/181774'
import { isTextLikeInput } from '../905/705398'
import { ClipboardOperation } from '../figma_app/915202'
/**
 * KeyboardEventWrapper (original: $$s1)
 * Wraps a native event and controls propagation.
 */
export class KeyboardEventWrapper {
  event: Event
  shouldPropagate: boolean = true

  constructor(event: Event) {
    this.event = event
  }

  /**
   * Prevents event propagation and default behavior.
   */
  accept = (): void => {
    this.shouldPropagate = false
    this.event.stopPropagation()
    this.event.preventDefault()
  }
}

/**
 * KeyboardReceiverRegistry (original: d)
 * Stores all KeyboardReceiver instances by id.
 */
let KeyboardReceiverRegistry: Record<string, KeyboardReceiver> = Object.create(null)

/**
 * keyboardReceiverIdCounter (original: c)
 * Used to generate unique ids for KeyboardReceiver.
 */
let keyboardReceiverIdCounter = 1

/**
 * generateKeyboardReceiverId (original: u)
 * Generates a unique id for KeyboardReceiver.
 */
const generateKeyboardReceiverId = (): string => `${keyboardReceiverIdCounter++}`

/**
 * KeyboardReceiver
 * Handles keyboard and clipboard events for focusable React components.
 */
export class KeyboardReceiver extends PureComponent<any, any> {
  unmounting: boolean
  el: HTMLElement | null
  id: string
  ref: (el: HTMLElement | null) => void
  focus: () => void
  blur: () => void
  hasFocus: () => boolean
  focusDidChange: () => void
  getParentReceiver: () => KeyboardReceiver | null
  blurSubtreeIfHidden: (el: HTMLElement) => void
  handleKeyboardEvent: (event: KeyboardEventWrapper) => void
  handleClipboardEvent: (event: KeyboardEventWrapper, op: ClipboardOperation) => void
  isInTextInputElement: () => boolean
  bubbleUpClipboardEvent: (event: KeyboardEventWrapper, op: ClipboardOperation) => void
  handlePasteEvent: (e: any) => void
  handleCopyEvent: (e: any) => void
  handleCutEvent: (e: any) => void

  /**
   * KeyboardReceiver constructor
   * @param props - React props
   */
  constructor(props: any) {
    super(props)
    this.unmounting = false
    this.el = null
    this.ref = (el) => {
      if (el)
        this.el = el
    }
    this.focus = () => {
      KeyboardFocusManager.setFocusedReceiver(this)
      this.focusDidChange()
      if (this.unmounting)
        this.blur()
    }
    this.blur = () => {
      if (KeyboardFocusManager.isParentOfFocusedReceiver(this)) {
        const parent = this.getParentReceiver()
        parent ? parent.focus() : KeyboardFocusManager.setFocusedReceiver(null)
        this.focusDidChange()
      }
    }
    this.hasFocus = () => KeyboardFocusManager.receiverIsReceivingKeyboardEvents(this)
    this.focusDidChange = () => {
      if (!this.unmounting) {
        if (this.props.propagateKeyboardFocus) {
          const parent = this.getParentReceiver()
          parent && parent.focusDidChange()
        }
        else {
          this.props.forceUpdate && this.props.forceUpdate()
        }
      }
    }
    this.getParentReceiver = () => {
      if (!this.el)
        return null
      let parent = this.el.parentElement
      while (parent) {
        const id = parent.getAttribute('data-keyboard-receiver')
        if (id != null)
          return KeyboardReceiverRegistry[id] ?? null
        parent = parent.parentElement
      }
      return null
    }
    this.blurSubtreeIfHidden = (el) => {
      if (!KeyboardFocusManager.isFocusedReceiver(this))
        return
      const ids: string[] = []
      let found = false
      let node: HTMLElement | null = this.el
      while (node) {
        const id = node.getAttribute('data-keyboard-receiver')
        if (id != null)
          ids.push(id)
        if (node === el) {
          found = true
          break
        }
        node = node.parentElement
      }
      if (found) {
        while (ids.length) {
          const receiver = KeyboardReceiverRegistry[ids.pop()!]
          receiver?.onHideOrUnmount()
        }
      }
    }
    this.handleKeyboardEvent = (event) => {
      if (this.props.handleKeyDown && event.event.type === 'keydown') {
        this.props.handleKeyDown(event)
      }
      if (event.shouldPropagate) {
        const parent = this.getParentReceiver()
        parent && parent.handleKeyboardEvent(event)
      }
    }
    this.handleClipboardEvent = (event, op) => {
      if (this.props.handleClipboard) {
        this.props.handleClipboard(event, op)
      }
      if (event.shouldPropagate) {
        const parent = this.getParentReceiver()
        parent && parent.handleClipboardEvent(event, op)
      }
    }
    this.isInTextInputElement = () => {
      const active = document.activeElement
      return !!active && (isTextLikeInput(active) || !!(active as HTMLElement).isContentEditable)
    }
    this.bubbleUpClipboardEvent = (event, op) => {
      if (!this.isInTextInputElement())
        this.handleClipboardEvent(event, op)
    }
    this.handlePasteEvent = (e) => {
      const event = new KeyboardEventWrapper(e.nativeEvent)
      this.bubbleUpClipboardEvent(event, ClipboardOperation.PASTE)
    }
    this.handleCopyEvent = (e) => {
      const event = new KeyboardEventWrapper(e.nativeEvent)
      this.bubbleUpClipboardEvent(event, ClipboardOperation.COPY)
    }
    this.handleCutEvent = (e) => {
      const event = new KeyboardEventWrapper(e.nativeEvent)
      this.bubbleUpClipboardEvent(event, ClipboardOperation.CUT)
    }
    this.id = generateKeyboardReceiverId()
    KeyboardReceiverRegistry[this.id] = this
    props.focusFunctionRef && (props.focusFunctionRef.current = this.focus)
    props.blurFunctionRef && (props.blurFunctionRef.current = this.blur)
    this.onShowOrMount()
  }

  /**
   * React lifecycle: componentWillUnmount
   */
  componentWillUnmount() {
    this.onHideOrUnmount()
    delete KeyboardReceiverRegistry[this.id]
  }

  /**
   * Called when receiver is hidden or unmounted.
   */
  onHideOrUnmount() {
    this.unmounting = true
    this.blur()
  }

  /**
   * Called when receiver is shown or mounted.
   */
  onShowOrMount() {
    this.unmounting = false
    this.props.focusOnMount && this.focus()
  }

  /**
   * Renders the receiver's container div.
   */
  render() {
    return jsx('div', {
      'ref': this.ref,
      'data-keyboard-receiver': this.id,
      'style': this.props.style,
      'className': this.props.className,
      'onCopy': this.handleCopyEvent,
      'onCut': this.handleCutEvent,
      'onPaste': this.handlePasteEvent,
      'data-non-interactive': true,
      'children': this.props.children,
    })
  }

  static displayName = 'KeyboardReceiver'
}

/**
 * isElementHidden (original: $$m2)
 * Checks if an element or its ancestors are hidden.
 * @param el - HTMLElement
 * @returns boolean
 */
export function isElementHidden(el: HTMLElement | null): boolean {
  while (el) {
    if ((el as HTMLElement).style.display === 'none')
      return true
    el = el.parentElement
  }
  return false
}

/**
 * KeyboardFocusManager (original: $$h3)
 * Manages keyboard focus and event dispatching.
 */
export class KeyboardFocusManagerClass {
  focusedReceiver: KeyboardReceiver | null = null
  customFocusElement: any = null
  hasFocus: boolean = true

  /**
   * Sets a custom focus element.
   */
  setCustomFocusElement = (el: any) => {
    this.customFocusElement = el
    this.customFocusElement.addFocusChangedCallback(this.focusChanged)
  }

  /**
   * Callback for focus changes.
   */
  focusChanged = (hasFocus: boolean) => {
    this.hasFocus = hasFocus
    this.focusedReceiver && this.focusedReceiver.focusDidChange()
  }

  /**
   * Sets the focused receiver.
   */
  setFocusedReceiver = (receiver: KeyboardReceiver | null) => {
    const prev = this.focusedReceiver
    this.focusedReceiver = receiver
    prev && prev.focusDidChange()
  }

  /**
   * Determines if a keyboard event should be intercepted.
   */
  shouldInterceptKeyboardEvent = (e: Event): boolean => {
    if (
      !this.customFocusElement?.isFocusElement(e.target)
      && e.target !== document.body
      && !isFullscreenInterceptElement(e.target)
    ) {
      let t = e.target as HTMLElement | null
      while (t) {
        if (t.id === 'fullscreen-root' || t.id === 'curator-portal-target')
          return false
        t = t.parentElement
      }
      return true
    }
    const eventWrapper = new KeyboardEventWrapper(e)
    this.dispatchKeyboardEvent(eventWrapper)
    return !eventWrapper.shouldPropagate
  }

  /**
   * Determines if a clipboard event should be intercepted.
   */
  shouldInterceptClipboardEvent = (e: Event, op: ClipboardOperation): boolean => {
    if (
      (this.customFocusElement && this.customFocusElement.isFocusElement(e.target))
      || e.target === document.body
    ) {
      e.preventDefault()
      const eventWrapper = new KeyboardEventWrapper(e)
      this.dispatchClipboardEvent(eventWrapper, op)
      return !eventWrapper.shouldPropagate
    }
    return false
  }

  /**
   * Dispatches a keyboard event to the focused receiver.
   */
  dispatchKeyboardEvent = (event: KeyboardEventWrapper) => {
    if (this.focusedReceiver && isElementHidden(this.focusedReceiver.el)) {
      console.warn('Detected a hidden focused receiver, ignoring keyboard event')
      return
    }
    this.focusedReceiver && this.focusedReceiver.handleKeyboardEvent(event)
  }

  /**
   * Dispatches a clipboard event to the focused receiver.
   */
  dispatchClipboardEvent = (event: KeyboardEventWrapper, op: ClipboardOperation) => {
    this.focusedReceiver && this.focusedReceiver.handleClipboardEvent(event, op)
  }

  /**
   * Checks if a receiver is receiving keyboard events.
   */
  receiverIsReceivingKeyboardEvents = (receiver: KeyboardReceiver): boolean => {
    if (!this.hasFocus)
      return false
    if (this.focusedReceiver === receiver)
      return true
    let t = this.focusedReceiver
    while (t && t.props.propagateKeyboardFocus) {
      const parent = t.getParentReceiver()
      if (parent === receiver)
        return true
      t = parent
    }
    return false
  }

  /**
   * Checks if the receiver is focused.
   */
  isFocusedReceiver = (receiver: KeyboardReceiver) => this.focusedReceiver === receiver

  /**
   * Checks if the receiver is a parent of the focused receiver.
   */
  isParentOfFocusedReceiver = (receiver: KeyboardReceiver): boolean => {
    let t = this.focusedReceiver
    while (t) {
      if (t === receiver)
        return true
      t = t.getParentReceiver()
    }
    return false
  }

  /**
   * Focuses all receivers in a subtree if necessary.
   */
  focusSubtreeIfNecessary = (el: HTMLElement) => {
    const queue: HTMLElement[] = [el]
    let i = 0
    while (i < queue.length) {
      const node = queue[i]
      const id = node.getAttribute('data-keyboard-receiver')
      if (id) {
        const receiver = KeyboardReceiverRegistry[id]
        receiver?.onShowOrMount()
      }
      if (node.children) {
        for (let j = 0; j < node.children.length; j++) queue.push(node.children[j] as HTMLElement)
      }
      i++
    }
  }

  /**
   * Blurs all receivers in a subtree if necessary.
   */
  blurSubtreeIfNecessary = (el: HTMLElement) => {
    this.focusedReceiver && this.focusedReceiver.blurSubtreeIfHidden(el)
  }

  /**
   * Gets the name of the focused receiver.
   */
  focusedReceiverName = (): string | undefined => {
    if (this.focusedReceiver)
      return this.focusedReceiver.props.name
  }

  /**
   * Focuses the custom canvas focus element.
   */

  focusCustomCanvasFocusElement = () => {
    return this.customFocusElement ? this.customFocusElement.focus() : null
  }

  /**
   * Focuses if unfocused.
   */
  focusIfUnfocused() {
    const active = document.activeElement
    if (
      document.hasFocus()
      && this.customFocusElement
      && !this.customFocusElement.isFocusElement(active)
      && (active && active !== document.body)
    ) {
      this.customFocusElement.focus()
    }
  }
}

/** Singleton instance of KeyboardFocusManager */
export const KeyboardFocusManager = new KeyboardFocusManagerClass()

// Export original variable names for compatibility
export const vL = KeyboardReceiver
export const pS = KeyboardEventWrapper
export const NB = isElementHidden
export const F2 = KeyboardFocusManager
