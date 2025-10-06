import { createRef, PureComponent } from 'react'
import { jsx } from 'react/jsx-runtime'

/**
 * Props for IntersectionSentinel component.
 */
export interface IntersectionSentinelProps {
  className?: string
  style?: React.CSSProperties
  rootMargin?: string
  onInitialLoad?: (isIntersecting: boolean) => void
  onIntersectionChange?: (entry: IntersectionObserverEntry) => void
}

/**
 * IntersectionSentinel monitors intersection state of its DOM node.
 * Original class name: $$$$a0
 */
export class IntersectionSentinel extends PureComponent<IntersectionSentinelProps> {
  /** Ref to the sentinel DOM node */
  scrollSentinel = createRef<HTMLDivElement>()
  /** IntersectionObserver instance */
  intersectionObserver: IntersectionObserver | null = null
  /** Current intersection state */
  _isIntersecting = false
  /** Initial intersection state */
  initialIntersectionState: boolean | null = null

  /**
   * Returns current intersection state.
   */
  get isIntersecting(): boolean {
    return this._isIntersecting
  }

  /**
   * Sets up IntersectionObserver after mount.
   */
  componentDidMount(): void {
    if (!window.IntersectionObserver) return

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        // Handle initial load
        if (this.props.onInitialLoad && this.initialIntersectionState === null) {
          this.initialIntersectionState = entry.isIntersecting
          this.props.onInitialLoad(this.initialIntersectionState)
        }

        // Handle intersection change
        if (entry.isIntersecting !== this._isIntersecting) {
          this._isIntersecting = entry.isIntersecting
          this.props.onIntersectionChange?.(entry)
        }
      },
      {
        rootMargin: this.props.rootMargin,
      }
    )

    const node = this.scrollSentinel.current
    if (node) {
      this.intersectionObserver.observe(node)
    }
  }

  /**
   * Cleans up IntersectionObserver before unmount.
   */
  componentWillUnmount(): void {
    this.intersectionObserver?.disconnect()
  }

  /**
   * Renders the sentinel div.
   */
  render() {
    return jsx('div', {
      ref: this.scrollSentinel,
      className: this.props.className,
      style: this.props.style,
    })
  }
}

/** Export for refactored IntersectionSentinel (original: a) */
export const a = IntersectionSentinel
