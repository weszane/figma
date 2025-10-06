import { PureComponent } from "react"
import { jsx } from "react/jsx-runtime"
import { C, G } from "../905/457693"

export class KeyboardShortcut extends PureComponent {
  render() {
    let e = ["\u2318", "\u2325", "\u21E7", "\u2303"]
    return jsx("span", {
      className: this.props.className,
      children: this.props.shortcut.split("").map((t, r) => {
        let i = e.includes(t) ? C : G
        return jsx("span", {
          className: i,
          children: t,
        }, r)
      }),
    })
  }

  static displayName = "KeyboardShortcut"
}

export const S = KeyboardShortcut
