import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef, useCallback, Fragment as _$$Fragment } from "react";
import { i as _$$i } from "../vendor/218335";
import { H } from "../vendor/373976";
import { u as _$$u } from "../vendor/363976";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { DialogTriggerButton } from "../905/976845";
import { J as _$$J } from "../905/125993";
import { IAssertResource } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useMemoStable } from "../905/19536";
import { trackFileEventWithStore } from "../figma_app/901889";
import { hh } from "../905/417232";
import { c$ } from "../figma_app/236327";
import { ErrorBoundaryCrash } from "../905/751457";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { syncFetchedVersionsThunk } from "../figma_app/147952";
import { setUniversalInsertViewResourceDetails } from "../905/116101";
import { p as _$$p } from "../469e6e40/489933";
import { stopPropagation } from "../figma_app/753501";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { Gt } from "../figma_app/248118";
import { useCanPerformAction } from "../figma_app/844435";
import { setSelectedDevModePropertiesPanelTab } from "../figma_app/741237";
import { useDropdownState } from "../905/848862";
import { HubTypeEnum } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
import { be } from "../figma_app/474636";
import { setupUserPluginPreferences } from "../figma_app/545541";
import { PluginImage } from "../905/480825";
import { j as _$$j } from "../905/834956";
import { ConnectedPointingDropdown } from "../905/504727";
import { SimpleComponentType } from "../figma_app/504088";
import { yG, dr } from "../7492/487492";
export function $$V1() {
  let e = setupUserPluginPreferences();
  let t = useCanPerformAction();
  return jsx($$H0, {
    ...e,
    runPlugin: t
  });
}
export let $$H0 = memo(function (e) {
  return !function () {
    let [e, t] = useState(!1);
    useEffect(() => {
      let e = requestAnimationFrame(() => {
        t(!0);
      });
      return () => cancelAnimationFrame(e);
    }, []);
    return e;
  }() ? null : jsx(ErrorBoundaryCrash, {
    boundaryKey: "PinnedPlugins",
    fallback: jsx(Fragment, {}),
    children: jsxs(hh, {
      children: [jsx(G, {
        ...e
      }), jsx(W, {})]
    })
  });
});
function W() {
  let e = q();
  let t = !!e;
  let [n, o] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (t) {
      let e = e => {
        o({
          x: e.clientX,
          y: e.clientY
        });
      };
      window.addEventListener("mousemove", e);
      return () => window.removeEventListener("mousemove", e);
    }
  }, [t]);
  return e ? createPortal(jsx(PluginImage, {
    plugin: e,
    className: cssBuilderInstance.h16.w16.bRadius2.$,
    style: {
      position: "fixed",
      left: n.x - 8,
      top: n.y - 8,
      pointerEvents: "none",
      zIndex: 1e5
    }
  }), document.body) : null;
}
function G(e) {
  let {
    pinnedPlugins,
    unpinPlugin,
    movePin,
    runPlugin
  } = e;
  let s = useAtomWithSubscription(be);
  let [r, c] = useState(!1);
  let u = q();
  let p = useDispatch<AppDispatch>();
  let {
    shownPlugins,
    overflowPlugins
  } = pinnedPlugins.length > 3 ? {
    shownPlugins: pinnedPlugins.slice(0, 2),
    overflowPlugins: pinnedPlugins.slice(2)
  } : {
    shownPlugins: pinnedPlugins,
    overflowPlugins: []
  };
  let m = s?.plugin_id ?? null;
  let _ = overflowPlugins.findIndex(e => e.plugin_id === m);
  if (-1 !== _) {
    let e = overflowPlugins[_];
    u || overflowPlugins.splice(_, 1);
    shownPlugins.push(e);
  }
  let y = shownPlugins[shownPlugins.length - 1]?.plugin_id;
  let b = useMemoStable(() => new Set(pinnedPlugins.map(e => e.plugin_id)), [pinnedPlugins]);
  useEffect(() => {
    p(syncFetchedVersionsThunk({
      resourceType: HubTypeEnum.PLUGIN,
      resourceIds: Array.from(b)
    }));
  }, [b, p]);
  return jsx("div", {
    className: cssBuilderInstance.flex.flexRow.flexGrow1.itemsEnd.$,
    "data-testid": "pinned-plugins",
    children: jsxs("div", {
      className: "pinned_plugins--pins--1aHI1",
      children: [jsx(J, {
        target: {
          type: "begin"
        },
        variant: "vertical"
      }), shownPlugins.map(e => {
        let t = e.plugin_id === m && !!u && -1 !== _;
        return jsxs("div", {
          style: {
            visibility: t ? "hidden" : "visible",
            display: "contents"
          },
          children: [jsx(U, {
            plugin: e,
            unpinPlugin,
            movePin,
            runPlugin,
            setIsDropdownShown: c
          }), jsx(J, {
            target: {
              type: "after",
              id: e.plugin_id
            },
            variant: "vertical",
            disabled: t
          })]
        }, e.plugin_id);
      }), overflowPlugins.length > 0 && jsx(K, {
        isDropdownShown: !!u || r,
        setIsDropdownShown: c,
        plugins: overflowPlugins,
        unpinPlugin,
        lastShownPluginID: y,
        movePin,
        runPlugin
      })]
    })
  });
}
function U({
  plugin: e,
  unpinPlugin: t,
  movePin: n,
  runPlugin: l,
  setIsDropdownShown: s
}) {
  let r = Gt(e.plugin_id, "pinned");
  let c = useAtomWithSubscription(be);
  let u = c?.plugin_id ?? null;
  let f = trackFileEventWithStore();
  let x = useRef(null);
  let m = useCanAccessFullDevMode();
  let _ = isDevHandoffEditorType() && !m;
  let y = useDispatch<AppDispatch>();
  let w = useDropdownState();
  let A = _$$p(e.plugin_id, r);
  let C = A.length > 0;
  let P = yG(e.plugin_id, "pinned") && C;
  let D = useCallback(t => {
    if (C) {
      P ? y(hideDropdownAction()) : y(dr({
        pluginId: e.plugin_id,
        tileType: "pinned"
      }));
      return;
    }
    r();
  }, [C, r, P, y, e.plugin_id]);
  let [{
    isDragging: B
  }, V] = _$$i(() => ({
    type: "pinned-plugin",
    collect: e => ({
      isDragging: !!e.isDragging()
    }),
    item: e,
    canDrag: () => u !== e.plugin_id && !_,
    end: (t, a) => {
      let i = a.getDropResult();
      a.didDrop() && i && n(e.plugin_id, i);
    }
  }), [_, n, u, e.plugin_id]);
  let H = w?.type === Y && w.data.pluginId === e.plugin_id;
  let W = useCallback(t => {
    t.stopPropagation();
    t.preventDefault();
    H ? y(hideDropdownAction()) : y(showDropdownThunk({
      type: Y,
      data: {
        targetRect: t.currentTarget.getBoundingClientRect(),
        pluginId: e.plugin_id
      }
    }));
  }, [y, H, e.plugin_id]);
  let G = x.current?.getBoundingClientRect();
  return jsxs("div", {
    className: cssBuilderInstance.relative.$,
    ref: x,
    children: [jsx("button", {
      className: c?.plugin_id === e.plugin_id ? "pinned_plugins--runningPin--SFxzi pinned_plugins--basePin--ivx6q" : "pinned_plugins--pin--QIbCP pinned_plugins--basePin--ivx6q",
      "data-tooltip-type": H || B ? void 0 : KindEnum.TEXT,
      "data-tooltip": H || B ? void 0 : e.name,
      onClick: t => {
        _ ? (setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN), y(setUniversalInsertViewResourceDetails({
          fdPreviewResource: {
            id: e.plugin_id,
            type: SimpleComponentType.PLUGIN
          }
        }))) : C ? D(t) : l && (setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN), u !== e.plugin_id && (r(), f("Dev Handoff Ran Pinned Plugin", {
          pluginId: e.plugin_id
        })), s(!1));
      },
      onContextMenu: W,
      children: jsx(PluginImage, {
        plugin: e,
        draggable: !1,
        className: cssBuilderInstance.h16.w16.bRadius2.$,
        ref: V,
        style: {
          opacity: B ? .5 : 1
        }
      })
    }), H && jsx(X, {
      plugin: e,
      unpinPlugin: t
    }), P && G && jsx(_$$j, {
      showPoint: !1,
      items: A,
      onSelectItem: t => {
        t.callback && (t.callback("", null, y), s(!1), f("Dev Handoff Ran Pinned Plugin Submenu", {
          pluginId: e.plugin_id
        }));
      },
      parentRect: G,
      dispatch: y,
      lean: "left"
    })]
  });
}
function K({
  plugins: e,
  unpinPlugin: t,
  lastShownPluginID: n,
  isDropdownShown: o,
  setIsDropdownShown: l,
  movePin: s,
  runPlugin: r
}) {
  let d = useRef(null);
  useEffect(() => {
    let e = e => {
      d.current && !d.current.contains(e.target) && l(!1);
    };
    document.addEventListener("click", e);
    return () => {
      document.removeEventListener("click", e);
    };
  }, [l]);
  return jsx(Fragment, {
    children: jsxs("div", {
      className: "pinned_plugins--dotContainer--SMpVn",
      ref: d,
      children: [jsx(DialogTriggerButton, {
        recordingKey: "overflow_pins",
        "aria-expanded": !1,
        onClick: () => {
          l(!o);
        },
        "aria-label": getI18nString("dev_handoff.inspect_panel.more_plugins"),
        htmlAttributes: {
          onMouseDown: stopPropagation,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("dev_handoff.inspect_panel.more_plugins")
        },
        children: jsx(_$$J, {})
      }), o && jsxs("div", {
        className: "pinned_plugins--dropdown--qIr18",
        children: [jsx(J, {
          target: {
            type: "after",
            id: n
          },
          variant: "horizontal"
        }), e.map(e => jsxs(_$$Fragment, {
          children: [jsx(U, {
            plugin: e,
            unpinPlugin: t,
            movePin: s,
            runPlugin: r,
            setIsDropdownShown: l
          }), jsx(J, {
            target: {
              type: "after",
              id: e.plugin_id
            },
            variant: "horizontal"
          })]
        }, e.plugin_id))]
      })]
    })
  });
}
function X({
  plugin: e,
  unpinPlugin: t
}) {
  let n = useDropdownState();
  return jsx(ConnectedPointingDropdown, {
    targetRect: n?.data.targetRect,
    lean: "left",
    minWidth: 64,
    maxWidth: 120,
    disableDropdownScrollContainer: !0,
    propagateCloseClick: !0,
    children: jsx(c$, {
      onClick: () => t(e.plugin_id),
      children: renderI18nText("dev_handoff.inspect_panel.unpin")
    })
  });
}
function J({
  target: e,
  variant: t,
  disabled: n = !1
}) {
  let [{
    isOver: i
  }, o] = H(() => ({
    accept: "pinned-plugin",
    drop: () => e,
    collect: e => ({
      isOver: !!e.isOver()
    }),
    canDrop: () => !n
  }), [e, n]);
  let s = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: "begin" === e.type ? 1 : 0,
    ...("vertical" === t ? "begin" === e.type ? {
      position: "relative",
      justifyContent: "end",
      minWidth: 16,
      height: 24,
      marginRight: -8
    } : {
      width: 16,
      height: 24,
      top: 0,
      left: -8
    } : {
      width: 24,
      height: 16,
      top: -8,
      left: 0
    })
  };
  return jsx("div", {
    style: {
      position: "relative",
      flexGrow: "begin" === e.type ? 1 : 0,
      width: 0,
      height: 0,
      display: "flex",
      overflow: "visible",
      zIndex: 1
    },
    children: jsx("div", {
      style: s,
      ref: o,
      children: i && jsx(Q, {
        variant: t,
        target: e
      })
    })
  });
}
function Q({
  variant: e,
  target: t
}) {
  return jsx("div", {
    style: {
      background: "var(--color-icon-brand)",
      ...("horizontal" === e ? {
        height: 2,
        width: 32
      } : {
        height: 32,
        width: 2
      }),
      ...("begin" === t.type ? {
        marginRight: 6
      } : {})
    }
  });
}
function q() {
  let e = _$$u();
  let [t, n] = useState(null);
  useEffect(() => e.getMonitor().subscribeToStateChange(() => {
    "pinned-plugin" === e.getMonitor().getItemType() ? n(e.getMonitor().getItem()) : n(null);
  }), [e, n]);
  return t;
}
let Y = "PINNED_PLUGIN_DROPDOWN";
export const pG = $$H0;
export const qs = $$V1;
