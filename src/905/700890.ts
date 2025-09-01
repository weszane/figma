import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
export class $$a0 extends PureComponent {
  render() {
    let {
      fraction,
      width = 18
    } = this.props;
    let i = 2 * fraction * Math.PI;
    let r = "string" == typeof width ? parseFloat(width) : width;
    let a = r / 2;
    let s = r / 2;
    let o = s - 3;
    let l = a + o * Math.cos(i - Math.PI / 2);
    let d = a + o * Math.sin(i - Math.PI / 2);
    let c = "";
    let u = "";
    fraction <= .5 ? c = `M${a},${a} L${a},${a - o} A${o},${o} 1 0,1 ${l},${d} Z` : (c = `M${a},${a} L${a},${a - o} A${o},${o} 1 0,1 ${a},${a + o} Z`, u = `M${a},${a} L${a},${a + o} A${o},${o} 1 0,1 ${l},${d} Z`);
    let p = `M ${a - s},${a} a ${s},${s} 0 1,0 ${a + s},${a - s} a ${s},${s} 0 1,0 ${-(a + s)},${a - s} ZM ${a - (s - 1)},${a} a ${s - 1},${s - 1} 0 1,0 ${2 * (s - 1)},0 a ${s - 1},${s - 1} 0 1,0 ${-2 * (s - 1)},0 Z`;
    return jsx("svg", {
      width: r,
      height: r,
      className: this.props.className,
      viewBox: `0 0 ${r} ${r}`,
      fill: "none",
      children: jsx("path", {
        fillRule: "evenodd",
        d: `${p} ${c} ${u}`,
        fill: this.props.pathFill
      })
    });
  }
}
$$a0.displayName = "Progress";
export const k = $$a0;