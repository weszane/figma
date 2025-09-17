import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { t as _$$t } from "../905/947268";
import { Z } from "../905/498136";
import { trackEventAnalytics } from "../905/449184";
import { getI18nString } from "../905/303541";
import { setBrowserViewBarModeOptions } from "../905/34809";
import { ViewMode } from "../figma_app/756995";
function h({
  viewMode: e,
  onViewModeChange: t,
  disabled: r
}) {
  let i = () => {
    trackEventAnalytics("file_browser_view_mode_toggle", {
      newViewMode: ViewMode.GRID
    });
    t(ViewMode.GRID);
  };
  let a = () => {
    trackEventAnalytics("file_browser_view_mode_toggle", {
      newViewMode: ViewMode.LIST
    });
    t(ViewMode.LIST);
  };
  return jsx("form", {
    children: jsxs(bL, {
      value: e?.toString(),
      legend: jsx(q, {
        children: getI18nString("fullscreen.view_mode.view_mode")
      }),
      readonly: r,
      onChange: e => {
        e === ViewMode.GRID.toString() ? i() : a();
      },
      children: [jsx(c$, {
        value: ViewMode.GRID.toString(),
        icon: jsx(_$$t, {}),
        "aria-label": getI18nString("fullscreen.view_mode.show_as_grid")
      }), jsx(c$, {
        value: ViewMode.LIST.toString(),
        icon: jsx(Z, {}),
        "aria-label": getI18nString("fullscreen.view_mode.show_as_list")
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
  let t = useDispatch();
  let r = useSelector(t => t.viewBarViewModeOptionByView[e.viewId]) ?? e.defaultOptions.viewMode;
  return jsx(h, {
    viewMode: r,
    onViewModeChange: r => {
      t(setBrowserViewBarModeOptions({
        viewId: e.viewId,
        viewMode: r
      }));
    },
    disabled: e.disabled
  });
}
export const $c = $$m0;
export const Kc = $$g1;