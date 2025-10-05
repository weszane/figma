import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef, useCallback, Fragment as _$$Fragment } from "react";
import { i as _$$i } from "../vendor/218335";
import { H as _$$H } from "../vendor/373976";
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
import { Cf } from "../905/504727";
import { SimpleComponentType } from "../figma_app/504088";
import { yG, dr } from "../7492/487492";
export function $$$1() {
  let e = setupUserPluginPreferences();
  let t = useCanPerformAction();
  return jsx($$B0, {
    ...e,
    runPlugin: t
  });
}
export let $$B0 = memo(function (e) {
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
      children: [jsx(z, {
        ...e
      }), jsx(G, {})]
    })
  });
});
function G() {
  let e = K();
  let t = !!e;
  let [a, i] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (t) {
      let e = e => {
        i({
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
      left: a.x - 8,
      top: a.y - 8,
      pointerEvents: "none",
      zIndex: 1e5
    }
  }), document.body) : null;
}
function z(e) {
  let {
    pinnedPlugins,
    unpinPlugin,
    movePin,
    runPlugin
  } = e;
  let l = useAtomWithSubscription(be);
  let [o, c] = useState(!1);
  let _ = K();
  let u = useDispatch();
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
  let x = l?.plugin_id ?? null;
  let b = overflowPlugins.findIndex(e => e.plugin_id === x);
  if (-1 !== b) {
    let e = overflowPlugins[b];
    _ || overflowPlugins.splice(b, 1);
    shownPlugins.push(e);
  }
  let f = shownPlugins[shownPlugins.length - 1]?.plugin_id;
  let j = useMemoStable(() => new Set(pinnedPlugins.map(e => e.plugin_id)), [pinnedPlugins]);
  useEffect(() => {
    u(syncFetchedVersionsThunk({
      resourceType: HubTypeEnum.PLUGIN,
      resourceIds: Array.from(j)
    }));
  }, [j, u]);
  return jsx("div", {
    className: cssBuilderInstance.flex.flexRow.flexGrow1.itemsEnd.$,
    "data-testid": "pinned-plugins",
    children: jsxs("div", {
      className: "pinned_plugins--pins--1aHI1",
      children: [jsx(Y, {
        target: {
          type: "begin"
        },
        variant: "vertical"
      }), shownPlugins.map(e => {
        let t = e.plugin_id === x && !!_ && -1 !== b;
        return jsxs("div", {
          style: {
            visibility: t ? "hidden" : "visible",
            display: "contents"
          },
          children: [jsx(V, {
            plugin: e,
            unpinPlugin,
            movePin,
            runPlugin,
            setIsDropdownShown: c
          }), jsx(Y, {
            target: {
              type: "after",
              id: e.plugin_id
            },
            variant: "vertical",
            disabled: t
          })]
        }, e.plugin_id);
      }), overflowPlugins.length > 0 && jsx(W, {
        isDropdownShown: !!_ || o,
        setIsDropdownShown: c,
        plugins: overflowPlugins,
        unpinPlugin,
        lastShownPluginID: f,
        movePin,
        runPlugin
      })]
    })
  });
}
function V({
  plugin: e,
  unpinPlugin: t,
  movePin: a,
  runPlugin: r,
  setIsDropdownShown: l
}) {
  let o = Gt(e.plugin_id, "pinned");
  let c = useAtomWithSubscription(be);
  let _ = c?.plugin_id ?? null;
  let p = trackFileEventWithStore();
  let h = useRef(null);
  let x = useCanAccessFullDevMode();
  let b = isDevHandoffEditorType() && !x;
  let f = useDispatch();
  let w = useDropdownState();
  let C = _$$p(e.plugin_id, o);
  let I = C.length > 0;
  let R = yG(e.plugin_id, "pinned") && I;
  let D = useCallback(t => {
    if (I) {
      R ? f(hideDropdownAction()) : f(dr({
        pluginId: e.plugin_id,
        tileType: "pinned"
      }));
      return;
    }
    o();
  }, [I, o, R, f, e.plugin_id]);
  let [{
    isDragging: U
  }, $] = _$$i(() => ({
    type: "pinned-plugin",
    collect: e => ({
      isDragging: !!e.isDragging()
    }),
    item: e,
    canDrag: () => _ !== e.plugin_id && !b,
    end: (t, n) => {
      let s = n.getDropResult();
      n.didDrop() && s && a(e.plugin_id, s);
    }
  }), [b, a, _, e.plugin_id]);
  let B = w?.type === X && w.data.pluginId === e.plugin_id;
  let G = useCallback(t => {
    t.stopPropagation();
    t.preventDefault();
    B ? f(hideDropdownAction()) : f(showDropdownThunk({
      type: X,
      data: {
        targetRect: t.currentTarget.getBoundingClientRect(),
        pluginId: e.plugin_id
      }
    }));
  }, [f, B, e.plugin_id]);
  let z = h.current?.getBoundingClientRect();
  return jsxs("div", {
    className: cssBuilderInstance.relative.$,
    ref: h,
    children: [jsx("button", {
      className: c?.plugin_id === e.plugin_id ? "pinned_plugins--runningPin--SFxzi pinned_plugins--basePin--ivx6q" : "pinned_plugins--pin--QIbCP pinned_plugins--basePin--ivx6q",
      "data-tooltip-type": B || U ? void 0 : KindEnum.TEXT,
      "data-tooltip": B || U ? void 0 : e.name,
      onClick: t => {
        b ? (setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN), f(setUniversalInsertViewResourceDetails({
          fdPreviewResource: {
            id: e.plugin_id,
            type: SimpleComponentType.PLUGIN
          }
        }))) : I ? D(t) : r && (setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN), _ !== e.plugin_id && (o(), p("Dev Handoff Ran Pinned Plugin", {
          pluginId: e.plugin_id
        })), l(!1));
      },
      onContextMenu: G,
      children: jsx(PluginImage, {
        plugin: e,
        draggable: !1,
        className: cssBuilderInstance.h16.w16.bRadius2.$,
        ref: $,
        style: {
          opacity: U ? .5 : 1
        }
      })
    }), B && jsx(H, {
      plugin: e,
      unpinPlugin: t
    }), R && z && jsx(_$$j, {
      showPoint: !1,
      items: C,
      onSelectItem: t => {
        t.callback && (t.callback("", null, f), l(!1), p("Dev Handoff Ran Pinned Plugin Submenu", {
          pluginId: e.plugin_id
        }));
      },
      parentRect: z,
      dispatch: f,
      lean: "left"
    })]
  });
}
function W({
  plugins: e,
  unpinPlugin: t,
  lastShownPluginID: a,
  isDropdownShown: i,
  setIsDropdownShown: r,
  movePin: l,
  runPlugin: o
}) {
  let d = useRef(null);
  useEffect(() => {
    let e = e => {
      d.current && !d.current.contains(e.target) && r(!1);
    };
    document.addEventListener("click", e);
    return () => {
      document.removeEventListener("click", e);
    };
  }, [r]);
  return jsx(Fragment, {
    children: jsxs("div", {
      className: "pinned_plugins--dotContainer--SMpVn",
      ref: d,
      children: [jsx(DialogTriggerButton, {
        recordingKey: "overflow_pins",
        "aria-expanded": !1,
        onClick: () => {
          r(!i);
        },
        "aria-label": getI18nString("dev_handoff.inspect_panel.more_plugins"),
        htmlAttributes: {
          onMouseDown: stopPropagation,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("dev_handoff.inspect_panel.more_plugins")
        },
        children: jsx(_$$J, {})
      }), i && jsxs("div", {
        className: "pinned_plugins--dropdown--qIr18",
        children: [jsx(Y, {
          target: {
            type: "after",
            id: a
          },
          variant: "horizontal"
        }), e.map(e => jsxs(_$$Fragment, {
          children: [jsx(V, {
            plugin: e,
            unpinPlugin: t,
            movePin: l,
            runPlugin: o,
            setIsDropdownShown: r
          }), jsx(Y, {
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
function H({
  plugin: e,
  unpinPlugin: t
}) {
  let a = useDropdownState();
  return jsx(Cf, {
    targetRect: a?.data.targetRect,
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
function Y({
  target: e,
  variant: t,
  disabled: a = !1
}) {
  let [{
    isOver: s
  }, i] = _$$H(() => ({
    accept: "pinned-plugin",
    drop: () => e,
    collect: e => ({
      isOver: !!e.isOver()
    }),
    canDrop: () => !a
  }), [e, a]);
  let l = {
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
      style: l,
      ref: i,
      children: s && jsx(J, {
        variant: t,
        target: e
      })
    })
  });
}
function J({
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
function K() {
  let e = _$$u();
  let [t, a] = useState(null);
  useEffect(() => e.getMonitor().subscribeToStateChange(() => {
    "pinned-plugin" === e.getMonitor().getItemType() ? a(e.getMonitor().getItem()) : a(null);
  }), [e, a]);
  return t;
}
let X = "PINNED_PLUGIN_DROPDOWN";
export const pG = $$B0;
export const qs = $$$1;