import type { ReactNode } from 'react'
import { Children, Component } from 'react'

import { jsx } from 'react/jsx-runtime'

interface RenderListByChunksProps {

  children: ReactNode
  chunkSize: number
  className?: string
  forwardedRef?: React.Ref<HTMLDivElement>
  listKey?: string
  onAllChunksRendered?: () => void
  style?: React.CSSProperties
}

interface RenderListByChunksState {
  maxIndex: number
}

export class RenderListByChunks extends Component<RenderListByChunksProps, RenderListByChunksState> {
  static displayName = 'RenderListByChunks'
  frameRequest: number | null = null
  calledOnAllChunksRendered = false

  constructor(props: RenderListByChunksProps) {
    super(props)

    this.state = {
      maxIndex: 0,
    }
  }

  componentDidMount(): void {
    this.tickIfNeeded()
  }

  componentDidUpdate(): void {
    this.tickIfNeeded()
  }

  UNSAFE_componentWillReceiveProps(nextProps: RenderListByChunksProps): void {
    if (this.props.listKey !== nextProps.listKey) {
      this.setState({
        maxIndex: nextProps.chunkSize,
      }, () => {
        this.tickIfNeeded()
      })
    }
  }

  componentWillUnmount(): void {
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest)
    }
  }

  tick = (): void => {
    this.setState(prevState => ({
      maxIndex: prevState.maxIndex + this.props.chunkSize,
    }), () => {
      this.frameRequest = null
      this.tickIfNeeded()
    })
  }

  tickIfNeeded = (): void => {
    if (!this.frameRequest) {
      if (Children.count(this.props.children) <= this.state.maxIndex) {
        if (this.props.onAllChunksRendered && !this.calledOnAllChunksRendered) {
          this.props.onAllChunksRendered()
          this.calledOnAllChunksRendered = true
        }
        return
      }
      this.frameRequest = requestAnimationFrame(this.tick)
    }
  }

  render(): ReactNode {
    const childrenArray = Children.toArray(this.props.children)
    const visibleChildren = childrenArray.slice(0, this.state.maxIndex)

    return jsx('div', {
      className: this.props.className,
      ref: this.props.forwardedRef,
      style: this.props.style,
      children: visibleChildren,
    })
  }
}


export const o = RenderListByChunks
