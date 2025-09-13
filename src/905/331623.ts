import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { SvgComponent } from "../905/714743";
let s = window.matchMedia("screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 2dppx)");
export class $$o0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      matches: s.matches
    };
    this.onMediaQueryListChange = e => {
      this.setState({
        matches: e.matches
      });
    };
  }
  componentDidMount() {
    s.addListener(this.onMediaQueryListChange);
  }
  componentWillUnmount() {
    s.removeListener(this.onMediaQueryListChange);
  }
  render() {
    let {
      svg,
      fallbackSvg,
      ...i
    } = this.props;
    let r = !this.state.matches && fallbackSvg ? fallbackSvg : svg;
    return jsx(SvgComponent, {
      svg: r,
      ...i
    });
  }
}
export const t = $$o0;