import type { ComponentProps, JSX, ReactNode, RefObject } from 'react'
import { useMemo } from 'react'
import { jsx } from 'react/jsx-runtime'
import { RecordingContext } from '../905/959312'
import { withTrackedClick } from '../figma_app/831799'
import {
  handleChangeEvent,
  handleEvent,
  handleGenericEvent,
  hookForKeyboard,
  handleMouseEvent,
  handlePointerEvent,
  isRecordingEnabled,
  RecordingPureComponent,
  SKIP_RECORDING,
  useRecordingKey,
} from '../figma_app/878298'

// Type definitions for component props
interface BaseRecordableProps {
  recordingKey?: string
  forwardedRef?: RefObject<any>
  dataTestId?: string
  dataOnboardingKey?: string
  onClick?: (e: MouseEvent) => void
  onDoubleClick?: (e: MouseEvent) => void
  onMouseDown?: (e: MouseEvent) => void
  onMouseUp?: (e: MouseEvent) => void
  onMouseMove?: (e: MouseEvent) => void
  onMouseEnter?: (e: MouseEvent) => void
  onMouseLeave?: (e: MouseEvent) => void
  onContextMenu?: (e: MouseEvent) => void
  onPointerDown?: (e: PointerEvent) => void
  onPointerUp?: (e: PointerEvent) => void
  onPointerMove?: (e: PointerEvent) => void
  onKeyUp?: (e: KeyboardEvent) => void
  onKeyDown?: (e: KeyboardEvent) => void
  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: FocusEvent) => void
}

interface RecordableInputProps extends BaseRecordableProps {
  onChange?: (e: Event) => void
}

interface RecordingProviderProps {
  children: ReactNode
}

/**
 * Base class for recordable components (originally class 'l')
 * Provides common recording functionality for UI interactions
 */
abstract class BaseRecordableComponent extends RecordingPureComponent<BaseRecordableProps> {
  // Mouse event handlers
  protected onClick = handleMouseEvent(this, 'click', (e: MouseEvent) =>
    this.props.onClick ? this.props.onClick(e) : SKIP_RECORDING)

  protected onContextClick = handleMouseEvent(this, 'contextmenu', (e: MouseEvent) =>
    this.props.onContextMenu ? this.props.onContextMenu(e) : SKIP_RECORDING)

  protected onDoubleClick = handleMouseEvent(this, 'dblclick', (e: MouseEvent) =>
    this.props.onDoubleClick ? this.props.onDoubleClick(e) : SKIP_RECORDING)

  protected onMouseDown = handleMouseEvent(this, 'mousedown', (e: MouseEvent) =>
    this.props.onMouseDown ? this.props.onMouseDown(e) : SKIP_RECORDING)

  protected onMouseUp = handleMouseEvent(this, 'mouseup', (e: MouseEvent) =>
    this.props.onMouseUp ? this.props.onMouseUp(e) : SKIP_RECORDING)

  protected onMouseMove = handleMouseEvent(this, 'mousemove', (e: MouseEvent) =>
    this.props.onMouseMove ? this.props.onMouseMove(e) : SKIP_RECORDING)

  protected onMouseEnter = handleMouseEvent(this, 'mouseenter', (e: MouseEvent) =>
    this.props.onMouseEnter ? this.props.onMouseEnter(e) : SKIP_RECORDING)

  protected onMouseLeave = handleMouseEvent(this, 'mouseleave', (e: MouseEvent) =>
    this.props.onMouseLeave ? this.props.onMouseLeave(e) : SKIP_RECORDING)

  // Pointer event handlers
  protected onPointerDown = handlePointerEvent(this, 'pointerdown', (e: PointerEvent) =>
    this.props.onPointerDown ? this.props.onPointerDown(e) : SKIP_RECORDING)

  protected onPointerUp = handlePointerEvent(this, 'pointerup', (e: PointerEvent) =>
    this.props.onPointerUp ? this.props.onPointerUp(e) : SKIP_RECORDING)

  protected onPointerMove = handlePointerEvent(this, 'pointermove', (e: PointerEvent) =>
    this.props.onPointerMove ? this.props.onPointerMove(e) : SKIP_RECORDING)

  // Keyboard event handlers
  protected onKeyUp = hookForKeyboard(this, 'keyup', (e: KeyboardEvent) =>
    this.props.onKeyUp ? this.props.onKeyUp(e) : SKIP_RECORDING)

  protected onKeyDown = hookForKeyboard(this, 'keydown', (e: KeyboardEvent) =>
    this.props.onKeyDown ? this.props.onKeyDown(e) : SKIP_RECORDING)

  // Generic event handlers
  protected onFocus = handleGenericEvent(this, 'focus', (e: FocusEvent) =>
    this.props.onFocus ? this.props.onFocus(e) : SKIP_RECORDING)

  protected onBlur = handleGenericEvent(this, 'blur', (e: FocusEvent) =>
    this.props.onBlur ? this.props.onBlur(e) : SKIP_RECORDING)

  /**
   * Abstract method to render the specific HTML element
   */
  abstract node(props: any, ref?: RefObject<any>): JSX.Element

  /**
   * Main render method that handles event binding and prop management
   */
  render(): JSX.Element {
    const {
      recordingKey,
      forwardedRef,
      dataTestId,
      dataOnboardingKey,
      ...remainingProps
    } = this.props

    // Conditionally bind event handlers if recording is enabled
    if (this.recordingKey()) {
      this.bindEventHandlers(remainingProps)
    }

    // Add data attributes
    this.addDataAttributes(remainingProps, dataTestId, dataOnboardingKey)

    return this.node(remainingProps, forwardedRef)
  }

  /**
   * Bind event handlers to props (originally complex conditional logic)
   */
  private bindEventHandlers(props: any): void {
    const eventBindings = [
      { prop: 'onClick', handler: this.onClick },
      { prop: 'onDoubleClick', handler: this.onDoubleClick },
      { prop: 'onMouseDown', handler: this.onMouseDown },
      { prop: 'onMouseMove', handler: this.onMouseMove },
      { prop: 'onMouseEnter', handler: this.onMouseEnter },
      { prop: 'onMouseLeave', handler: this.onMouseLeave },
      { prop: 'onMouseUp', handler: this.onMouseUp },
      { prop: 'onContextMenu', handler: this.onContextClick },
      { prop: 'onKeyUp', handler: this.onKeyUp },
      { prop: 'onKeyDown', handler: this.onKeyDown },
      { prop: 'onFocus', handler: this.onFocus },
      { prop: 'onBlur', handler: this.onBlur },
      { prop: 'onPointerDown', handler: this.onPointerDown },
      { prop: 'onPointerUp', handler: this.onPointerUp },
      { prop: 'onPointerMove', handler: this.onPointerMove },
    ]

    eventBindings.forEach(({ prop, handler }) => {
      if (this.props[prop as keyof BaseRecordableProps]) {
        props[prop] = handler
      }
    })
  }

  /**
   * Add data attributes to props
   */
  private addDataAttributes(props: any, dataTestId?: string, dataOnboardingKey?: string): void {
    if (dataTestId) {
      props['data-testid'] = dataTestId
    }
    if (dataOnboardingKey) {
      props['data-onboarding-key'] = dataOnboardingKey
    }
  }
}

/**
 * Recordable div component (originally $$d0)
 */
export class RecordableDiv extends BaseRecordableComponent {
  static displayName = 'RecordableDiv'
  node(props: ComponentProps<'div'>, ref?: RefObject<HTMLDivElement>): JSX.Element {
    return jsx('div', { ...props, ref })
  }
}
withTrackedClick(RecordableDiv)

/**
 * Recordable span component (originally $$c5)
 */
export class RecordableSpan extends BaseRecordableComponent {
  static displayName = 'RecordableSpan'
  node(props: ComponentProps<'span'>, ref?: RefObject<HTMLSpanElement>): JSX.Element {
    return jsx('span', { ...props, ref })
  }
}


/**
 * Recordable button component (originally $$u1)
 */
export class RecordableButton extends BaseRecordableComponent {
  static displayName = 'RecordableButton'
  node(props: ComponentProps<'button'>, ref?: RefObject<HTMLButtonElement>): JSX.Element {
    return jsx('button', { ...props, ref })
  }
}


/**
 * Recordable anchor component (originally $$p3)
 */
export class RecordableAnchor extends BaseRecordableComponent {
  static displayName = 'RecordableA'
  node(props: ComponentProps<'a'>, ref?: RefObject<HTMLAnchorElement>): JSX.Element {
    return jsx('a', { ...props, ref })
  }
}


/**
 * Base class for input-like components with change event handling
 */
abstract class BaseRecordableInputComponent extends BaseRecordableComponent {
  protected onChange = handleChangeEvent(this, 'change', (e: Event) =>
    (this.props as RecordableInputProps).onChange ? (this.props as RecordableInputProps).onChange!(e) : SKIP_RECORDING)
}

/**
 * Recordable input component (originally $$m6)
 */
export class RecordableInput extends BaseRecordableInputComponent {
  static displayName = 'RecordableInput'
  node(props: ComponentProps<'input'>, ref?: RefObject<HTMLInputElement>): JSX.Element {
    return jsx('input', {
      ...props,
      'onChange': this.onChange,
      ref,
      'dir': 'auto',
      'data-onboarding-key': this.props.dataOnboardingKey,
    })
  }
}


/**
 * Recordable textarea component (originally $$h4)
 */
export class RecordableTextarea extends BaseRecordableInputComponent {
  static displayName = 'RecordableTextarea'
  node(props: ComponentProps<'textarea'>, ref?: RefObject<HTMLTextAreaElement>): JSX.Element {
    return jsx('textarea', {
      ...props,
      onChange: this.onChange,
      ref,
      dir: 'auto',
    })
  }
}


/**
 * Recording context provider component (originally $$g2)
 * Provides recording functionality to child components
 */
export function RecordingProvider({ children }: RecordingProviderProps): JSX.Element {
  const recordingFunction = useMemo(() => {
    return isRecordingEnabled() ? setupRecordingHandler : null
  }, [])

  return jsx(RecordingContext.Provider, {
    value: recordingFunction,
    children,
  })
}

/**
 * Sets up recording handler for events (originally anonymous function)
 */
function setupRecordingHandler(eventHandler: Fn, config: { recordingKey?: string, eventName: string }) {
  const recordingKey = useRecordingKey(config.recordingKey)

  return useMemo(() => {
    if (!eventHandler || !config.recordingKey)
      return eventHandler

    const recordedHandler = handleEvent(recordingKey, config.eventName, (args: any) =>
      Array.isArray(args) ? eventHandler(...args) : eventHandler(args))

    return (...args: any[]) => recordedHandler(args)
  }, [recordingKey, config.eventName, eventHandler, config.recordingKey])
}

// Export aliases with original variable names as comments
export const D8 = RecordableDiv // $$d0
export const GG = RecordableButton // $$u1
export const T9 = RecordingProvider // $$g2
export const lt = RecordableAnchor // $$p3
export const mv = RecordableTextarea // $$h4
export const oj = RecordableSpan // $$c5
export const u2 = RecordableInput // $$m6
