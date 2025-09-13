import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { h as _$$h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { B } from "../905/759157";
import { A as _$$A } from "../905/351112";
import { Xt } from "../figma_app/399472";
import { showModalHandler } from "../905/156213";
import { TrackingContext } from "../figma_app/831799";
import { Yo } from "../figma_app/543529";
import { logAndTrackCTA } from "../figma_app/314264";
import { getPluginVersion } from "../figma_app/300692";
import { ViewMode } from "../figma_app/756995";
import { H } from "../figma_app/441663";
import { Ce, Xg } from "../figma_app/878651";
import { r } from "../905/534055";
import { j_, Di, ii } from "../905/217142";
import { S as _$$S } from "../figma_app/783597";
import { i1 } from "../905/417669";
import { p as _$$p } from "../figma_app/93911";
export function $$v0() {
  let e = useSelector(e => e.publishedPlugins);
  let t = Yo();
  let r = _$$S(e, t?.id);
  let i = useDispatch();
  return (_$$h(() => {
    i(Xt());
  }), t && 0 !== r.length) ? jsx($$A1, {
    plugins: r,
    renderPluginDropdownButton: !0
  }) : jsx("div", {
    className: _$$p,
    children: renderI18nText("org_view.private_plugins_will_appear_here")
  });
}
export function $$A1({
  plugins: e,
  renderPluginDropdownButton: t
}) {
  return jsx(TrackingContext.Consumer, {
    children: r => jsx(x, {
      plugins: e,
      trackingContext: r.name,
      renderPluginDropdownButton: t
    })
  });
}
function x({
  plugins: e,
  trackingContext: t,
  renderPluginDropdownButton: r
}) {
  let s = useDispatch();
  let o = j_();
  let p = B();
  let {
    showing,
    show,
    data
  } = Di();
  useEffect(() => {
    s(Xt());
  }, [s]);
  let T = useMemo(() => e.map(e => ({
    plugin: e,
    version: getPluginVersion(e)
  })), [e]);
  let S = useCallback(({
    version: e
  }) => e.name ?? "", []);
  let v = useCallback(({
    plugin: e
  }, r) => {
    logAndTrackCTA({
      context: t,
      text: "Plugin Tile",
      pluginId: e.id
    });
    p(e, r);
  }, [p, t]);
  let A = useCallback(e => {
    if (1 !== e.length) return;
    let t = e[0].plugin;
    s(showModalHandler({
      type: H,
      data: {
        plugin: t
      },
      showModalsBeneath: !0
    }));
  }, [s]);
  let x = useCallback((e, t, r) => {
    1 === e.length && show({
      data: {
        publishedResource: e[0].plugin,
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        },
        index: r
      }
    });
  }, [show]);
  let O = useCallback(({
    plugin: e
  }) => jsx($$C, {
    plugin: e,
    renderPluginDropdownButton: r
  }), [r]);
  return jsxs(Fragment, {
    children: [jsx(_$$A, {
      items: T,
      getAriaLabel: S,
      viewType: ViewMode.GRID,
      handleOpenItem: v,
      handleContextMenu: x,
      handleDeleteKey: o.unwrapOr(!1) ? A : void 0,
      multiselectDisabled: !0,
      isDraggable: !1,
      gridViewProps: {
        tileClassName: i1,
        containerStyle: w.grid,
        renderTile: N,
        renderTileFooter: O
      }
    }), showing && data && jsx(ii, {
      dropdownData: data
    })]
  });
}
function N({
  plugin: e
}) {
  return jsx(Ce, {
    plugin: e,
    isPublishing: !1,
    showNewBadge: !1,
    isPublicOverride: !1
  });
}
function $$C({
  plugin: e,
  renderPluginDropdownButton: t
}) {
  return jsx(Xg, {
    showInstallCount: !0,
    plugin: e,
    isPublicOverride: !1,
    dropdown: t ? jsx(r, {
      resource: e
    }) : void 0
  });
}
let w = {
  grid: {
    padding: "x15fnm84",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
export const C = $$v0;
export const y = $$A1;