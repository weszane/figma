import type { ReactNode } from 'react'
import { PureComponent } from 'react'
import { jsx } from 'react/jsx-runtime'
import { SvgComponent } from '../905/714743'
/**
 * MediaQuerySvgComponent listens for high-DPI media queries and switches SVGs accordingly.
 * Original class name: $$o0
 */

interface MediaQuerySvgComponentProps {
  svg: ReactNode
  fallbackSvg?: ReactNode
  [key: string]: any
}

interface MediaQuerySvgComponentState {
  matches: boolean
}

const mediaQueryList = window.matchMedia(
  'screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)',
)

/**
 * MediaQuerySvgComponent
 * Switches between svg and fallbackSvg based on media query.
 */
export class MediaQuerySvgComponent extends PureComponent<
  MediaQuerySvgComponentProps,
  MediaQuerySvgComponentState
> {
  /**
   * @param props - MediaQuerySvgComponentProps
   */
  constructor(props: MediaQuerySvgComponentProps) {
    super(props)
    this.state = {
      matches: mediaQueryList.matches,
    }
  }

  /**
   * Handles media query list change event.
   * Original method name: onMediaQueryListChange
   */
  private handleMediaQueryListChange = (event: MediaQueryListEvent) => {
    this.setState({
      matches: event.matches,
    })
  }

  componentDidMount() {
    mediaQueryList.addListener(this.handleMediaQueryListChange)
  }

  componentWillUnmount() {
    mediaQueryList.removeListener(this.handleMediaQueryListChange)
  }

  /**
   * Renders the appropriate SVG based on media query.
   * Original method name: render
   */
  render() {
    const { svg, fallbackSvg, ...restProps } = this.props
    const selectedSvg = !this.state.matches && fallbackSvg ? fallbackSvg : svg
    return jsx(SvgComponent, {
      svg: selectedSvg,
      ...restProps,
    })
  }
}

// Export with original variable name for compatibility
export const t = MediaQuerySvgComponent
