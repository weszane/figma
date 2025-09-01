import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useEffect, useCallback } from "react";
import { d4 } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { b as _$$b, bL, mc, YJ, hE } from "../figma_app/860955";
import { E as _$$E } from "../905/632989";
import { O as _$$O } from "../905/969533";
import { NLJ, Oin } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import p from "classnames";
import { R as _$$R } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { A as _$$A } from "../905/482208";
import { T as _$$T } from "../905/868547";
import { z4 } from "../905/37051";
import { Um } from "../905/848862";
import { q5 } from "../figma_app/516028";
import { ut } from "../figma_app/84367";
import { Ib } from "../905/129884";
import { Yh, TY, vg } from "../figma_app/357047";
import { xn } from "../figma_app/108168";
import { t as _$$t } from "../figma_app/856638";
import { FK, rA, T0 } from "../figma_app/121043";
import { Zk } from "../figma_app/29089";
import { ZU, fT } from "../figma_app/986347";
import { Pf, NT, ZS } from "../figma_app/152574";
var _ = p;
let O = memo(function ({
  item: e
}) {
  let t = d4(t => _$$A(e.label));
  return jsx("div", {
    className: Pf,
    children: t
  }, `label-${e.label}`);
});
let R = memo(function ({
  item: e,
  recordingKey: t
}) {
  let r = d4(t => Yh(t.mirror.appModel, e.action));
  let i = d4(t => _$$A(e.action));
  return jsx(FK, {
    action: e.action,
    isEnabled: r,
    text: i,
    recordingKey: t
  }, `text-button-${e.action}`);
});
let L = memo(function ({
  item: e,
  disabled: t,
  recordingKey: r
}) {
  let i = e.children.filter(e => !Zk(e) || !e.featureFlags || e.featureFlags.every(e => getFeatureFlags()[e]));
  let s = _$$R(e => i.filter(t => Zk(t) && Yh(e.mirror.appModel, t.action)));
  let o = d4(e => s.length > 0 && P(s[0], e));
  if (0 === s.length) return null;
  if (e.flyoutHideOptionsIfSingleEnabledAction && 1 === s.length) {
    var l;
    return jsx(rA, {
      item: (l = s[0], {
        type: ZU.ACTION,
        ...l
      }),
      isEnabled: !0,
      isActive: o,
      recordingKey: r
    }, `action-button-${s[0].action}`);
  }
  return 1 === s.length && "flatten-selection" === s[0].action ? null : jsx(xn, {
    item: {
      ...e,
      children: i
    },
    disabled: t,
    recordingKey: r,
    styleActiveItem: !e.flyoutDoNotStyleActiveItem
  }, `flyout-${e.name}`);
});
function P(e, t) {
  return "isActive" in e && e.isActive ? e.isActive(t) : "propertyValue" in e && void 0 !== e.propertyValue && t.mirror.appModel[e.property] === e.propertyValue;
}
let D = memo(function ({
  item: e,
  recordingKey: t
}) {
  let r = ut(e.isActiveObservable ? e.isActiveObservable() : null, !1);
  let i = d4(t => P(e, t)) || r;
  let s = $$G0();
  return jsx(rA, {
    item: e,
    isEnabled: s(e),
    isActive: i,
    "aria-pressed": i,
    disabled: e.disabled,
    recordingKey: "toolbarView.toolCreateSymbol" === t ? "toolbarView.createSymbolFlyout" : t
  }, `action-button-${e.reactKey ?? e.action}`);
});
let k = memo(function ({
  item: e,
  numUnreadComments: t,
  recordingKey: r,
  canEdit: i
}) {
  let s = d4(t => Yh(t.mirror.appModel, e.action));
  let o = Um();
  let l = d4(t => e.tool !== NLJ.NONE && e.tool === t.mirror.appModel.currentTool && !TY(o));
  let d = d4(e => e.mirror.appModel.topLevelMode);
  return e.featureFlags && !e.featureFlags.every(e => getFeatureFlags()[e]) ? null : jsx(T0, {
    dropdownShown: o,
    isEnabled: s,
    isActive: l,
    item: e,
    numUnreadComments: t,
    recordingKey: r,
    topLevelMode: d,
    isWide: e.isWideForEditors && i
  }, `tool-button-${e.tool}`);
});
let M = memo(function ({
  item: e,
  recordingKey: t
}) {
  return jsx(F, {
    item: e,
    recordingKey: t
  });
});
function F({
  item: e,
  recordingKey: t
}) {
  let {
    getTriggerProps,
    manager
  } = _$$b();
  if (useEffect(() => {
    e.onSubmenuOpenClose?.(manager.isOpen);
  }, [manager.isOpen, e]), 0 === e.items.length) return null;
  let s = e.items.find(fT)?.getTitle();
  let c = e.items.filter(e => !fT(e)).map(e => jsx(_$$t, {
    item: e,
    recordingKey: t
  }, e.recordingKey));
  return jsxs(bL, {
    manager,
    children: [jsxs(_$$E, {
      ...getTriggerProps(),
      "aria-label": e.getTitle(),
      "data-tooltip": e.getTitle(),
      "data-tooltip-type": Ib.TEXT,
      className: _()(NT, {
        [ZS]: manager.isOpen
      }),
      recordingKey: t,
      children: [e.icon, jsx(_$$O, {})]
    }), jsx(mc, {
      children: jsx(YJ, {
        title: s ? jsx(hE, {
          children: s
        }) : void 0,
        children: c
      })
    })]
  });
}
export let $$j1 = memo(function ({
  item: e,
  numUnreadComments: t,
  recordingKey: r
}) {
  let i = $$U3();
  let o = d4(e => e.progressBarState.mode);
  let l = q5();
  let d = _$$T(o);
  if (!i(e)) return null;
  let c = e.dontChainRecordingKeys ? e.recordingKey : Pt(r, e.recordingKey);
  switch (e.type) {
    case ZU.LABEL:
      return jsx(O, {
        item: e
      });
    case ZU.TEXT_BUTTON:
      return jsx(R, {
        item: e,
        recordingKey: c
      });
    case ZU.FLYOUT:
      return jsx(L, {
        item: e,
        disabled: d,
        recordingKey: c
      });
    case ZU.ACTION:
      return jsx(D, {
        item: e,
        recordingKey: c
      });
    case ZU.ACTION_SUBMENU:
      return jsx(M, {
        item: e,
        recordingKey: c
      });
    case ZU.TOOL:
      return jsx(k, {
        item: e,
        numUnreadComments: t,
        recordingKey: c,
        canEdit: l?.canEdit || !1
      });
    default:
      xb(e);
  }
});
export function $$U3() {
  let e = d4(e => e.mirror.appModel.activeCanvasEditModeType);
  let t = d4(e => e.mirror.appModel.currentTool);
  let r = q5();
  let n = d4(e => e.progressBarState.mode);
  let s = _$$T(n);
  let o = d4(e => s ? !r?.canEdit : e.mirror.appModel.isReadOnly);
  let l = d4(e => e.mirror.appModel.isSceneReadOnly);
  let d = d4(e => !!e.user);
  return useCallback(i => !(!i || l && !i.nonEditorsAllowed || i.onlyShowInReadOnly && !(o && n !== Oin.HIDE_UI) || i.hideInExtension && z4.getIsExtension()) && (!!r || !i.newFileDisabled) && (!!d || !!i.loggedOutAllowed) && (!i.editModes || -1 !== i.editModes.indexOf(e)) && (!i.showForTools || -1 !== i.showForTools.indexOf(t)), [l, o, n, r, d, e, t]);
}
export function $$B2() {
  return _$$R(e => {
    let t = {};
    for (let r in e.mirror.appModel) vg(r) && (t[r] = e.mirror.appModel[r]);
    return t;
  });
}
export function $$G0() {
  let e = $$B2();
  let t = _$$R(e => e.mirror.selectionProperties.resettableInstanceOverrides?.selectionOverrides);
  let r = q5();
  return useCallback(n => Yh(e, n.action) && (!n.featureFlags || n.featureFlags.every(e => getFeatureFlags()[e])) && (!n.isAvailable || n.isAvailable(e, t, r)), [e, t, r]);
}
export const PK = $$G0;
export const QE = $$j1;
export const z0 = $$B2;
export const z2 = $$U3;