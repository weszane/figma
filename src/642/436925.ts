import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { N as _$$N } from "../905/852320";
import { Pt } from "../figma_app/806412";
import { t } from "../905/303541";
import { SU } from "../figma_app/451499";
import { E7 } from "../905/216495";
import { MK } from "../figma_app/844696";
import { c$, l6, sK } from "../905/794875";
import { j4, r5 } from "../figma_app/436286";
let h = new SU();
class m extends c$ {}
let g = l6;
export class $$f1 extends PureComponent {
  render() {
    let e = this.props.includePassThrough ? j4 : r5;
    return jsx(g, {
      ariaLabel: t("fullscreen.properties_panel.color_picker.blend_mode_select.tooltip.blend_mode"),
      chevronClassName: this.props.chevronClassName,
      className: this.props.className,
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      dropdownWidth: this.props.isUI3 ? 120 : "auto",
      enablePreview: !0,
      formatter: h,
      icon: this.props.isUI3 ? jsx(_$$N, {}) : jsx(MK, {
        value: E7(this.props.property),
        defaultBlendMode: this.props.includePassThrough ? "PASS_THROUGH" : "NORMAL"
      }),
      id: $$x0(this.props.id),
      inputClassName: this.props.inputClassName,
      onChange: this.props.onChange,
      onMouseDown: this.props.onMouseDown,
      property: this.props.property,
      recordingKey: this.props.recordingKey,
      willShowDropdown: this.props.willShowDropdown,
      children: e.map((e, t) => "SELECT_DIVIDER" === e ? jsx(sK, {}, t) : jsx(m, {
        value: e,
        recordingKey: Pt(this.props, e)
      }, t))
    });
  }
}
export function $$x0(e) {
  return `blend-mode-select-${e}`;
}
$$f1.displayName = "BlendMode";
export const J = $$x0;
export const N = $$f1;