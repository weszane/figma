import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { RecordableInput, RecordableTextarea } from '../905/511649'

import { RecordingPureComponent } from '../figma_app/878298'
// CSS class name for lazy input
const lazyInputClassName = 'lazy_input--lazyInput--1mJeW'

/**
 * Props for LazyInput component
 */
export interface LazyInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'text' | 'textarea'
  delay?: number
  innerRef?: React.Ref<any>
  maxInputLength?: number
  className?: string
  recordKey?: string
  [key: string]: any // Allow additional props
}

/**
 * State for LazyInput component
 */
interface LazyInputState {
  value: string
  requestedValue?: string
}

/**
 * LazyInput component (original: class d)
 * Delays updating the input value to reduce unnecessary renders.
 */
class LazyInput extends RecordingPureComponent<LazyInputProps, LazyInputState> {
  static displayName: string
  static defaultProps: Partial<LazyInputProps>
  procrastinating: boolean
  procrastinationTimer: ReturnType<typeof setTimeout> | null

  constructor(props: LazyInputProps) {
    super(props)
    this.procrastinating = false
    this.procrastinationTimer = null

    this.onLazyUpdate = this.onLazyUpdate.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = {
      value: props.value,
    }
  }

  /**
   * Called when the procrastination timer fires.
   * Updates the value if needed.
   */
  onLazyUpdate() {
    this.procrastinating = false
    this.updateIfNotLazy(this.state.requestedValue)
  }

  /**
   * Handles input change events.
   * Slices input if maxInputLength is set.
   */
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.procrastinate()
    let inputValue = e.target.value
    if (this.props.maxInputLength && inputValue.length > this.props.maxInputLength) {
      inputValue = inputValue.slice(0, this.props.maxInputLength)
    }
    this.setState({ value: inputValue })
    this.props.onChange(e)
  }

  /**
   * React lifecycle: update state if props change and not procrastinating.
   */
  UNSAFE_componentWillReceiveProps(nextProps: LazyInputProps) {
    this.updateIfNotLazy(nextProps.value)
  }

  /**
   * React lifecycle: clear procrastination timer on unmount.
   */
  componentWillUnmount() {
    super.componentWillUnmount()
    if (this.procrastinationTimer) {
      clearTimeout(this.procrastinationTimer)
      this.procrastinating = false
    }
  }

  /**
   * Updates the value if not procrastinating.
   */
  updateIfNotLazy(value?: string) {
    if (this.procrastinating) {
      this.setState({ requestedValue: value })
    }
    else if (this.state.value !== value) {
      this.setState({ value: value as string, requestedValue: undefined })
    }
  }

  /**
   * Starts the procrastination timer.
   */
  procrastinate() {
    this.procrastinating = true
    if (this.procrastinationTimer)
      clearTimeout(this.procrastinationTimer)
    this.procrastinationTimer = setTimeout(this.onLazyUpdate, this.props.delay)
  }

  /**
   * Returns props for the input/textarea element.
   */
  getProps(): Record<string, any> {
    const { delay, innerRef, maxInputLength, ...rest } = this.props
    const props = { ...rest }
    props.value = this.state.value
    if (props.onChange)
      props.onChange = this.onChange
    if (props.value == null)
      props.value = undefined
    props.className = props.className ? `${props.className} ${lazyInputClassName}` : lazyInputClassName
    return props
  }

  /**
   * Renders the input or textarea.
   */
  render() {
    return this.props.type === 'textarea'
      ? jsx(RecordableTextarea, {
          ...this.getProps(),
          forwardedRef: this.props.innerRef,
        })
      : jsx(RecordableInput, {
          ...this.getProps(),
          forwardedRef: this.props.innerRef,
        })
  }
}

LazyInput.displayName = 'LazyInput'
LazyInput.defaultProps = {
  type: 'text',
  delay: 1000,
}

/**
 * ForwardRef wrapper for LazyInput (original: $$c0)
 */
export const LazyInputForwardRef = forwardRef<any, LazyInputProps>((props, ref) =>
  jsx(LazyInput, {
    ...props,
    innerRef: ref,
  }),
)

/**
 * Exported alias for LazyInputForwardRef (original: L)
 */
export const L = LazyInputForwardRef
