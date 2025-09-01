import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { wA, d4 } from "../vendor/514228";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { t as _$$t } from "../905/947268";
import { Z } from "../905/498136";
import { sx } from "../905/449184";
import { t as _$$t2 } from "../905/303541";
import { uV } from "../905/34809";
import { XU } from "../figma_app/756995";
function h({
  viewMode: e,
  onViewModeChange: t,
  disabled: r
}) {
  let i = () => {
    sx("file_browser_view_mode_toggle", {
      newViewMode: XU.GRID
    });
    t(XU.GRID);
  };
  let a = () => {
    sx("file_browser_view_mode_toggle", {
      newViewMode: XU.LIST
    });
    t(XU.LIST);
  };
  return jsx("form", {
    children: jsxs(bL, {
      value: e?.toString(),
      legend: jsx(q, {
        children: _$$t2("fullscreen.view_mode.view_mode")
      }),
      readonly: r,
      onChange: e => {
        e === XU.GRID.toString() ? i() : a();
      },
      children: [jsx(c$, {
        value: XU.GRID.toString(),
        icon: jsx(_$$t, {}),
        "aria-label": _$$t2("fullscreen.view_mode.show_as_grid")
      }), jsx(c$, {
        value: XU.LIST.toString(),
        icon: jsx(Z, {}),
        "aria-label": _$$t2("fullscreen.view_mode.show_as_list")
      })]
    })
  });
}
export class $$m0 extends PureComponent {
  constructor(e) {
    super(e);
    this.onViewModeChange = e => {
      this.setState({
        viewMode: e
      }, () => {
        this.props.onViewModeChange(e);
      });
    };
    this.state = {
      viewMode: e.initialViewMode
    };
  }
  render() {
    return jsx(h, {
      viewMode: this.state.viewMode,
      onViewModeChange: this.onViewModeChange
    });
  }
}
export function $$g1(e) {
  let t = wA();
  let r = d4(t => t.viewBarViewModeOptionByView[e.viewId]) ?? e.defaultOptions.viewMode;
  return jsx(h, {
    viewMode: r,
    onViewModeChange: r => {
      t(uV({
        viewId: e.viewId,
        viewMode: r
      }));
    },
    disabled: e.disabled
  });
}
export const $c = $$m0;
export const Kc = $$g1;