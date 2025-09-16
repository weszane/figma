import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { b as _$$b, bL, mc, YJ, hE } from "../figma_app/860955";
import { ButtonPrimitive } from "../905/632989";
import { O as _$$O } from "../905/969533";
import { DesignGraphElements, UIVisibilitySetting } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import p from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey } from "../figma_app/878298";
import { formatI18nMessage } from "../905/482208";
import { isUIHiddenOrLocked } from "../905/868547";
import { z4 } from "../905/37051";
import { Um } from "../905/848862";
import { selectCurrentFile } from "../figma_app/516028";
import { getObservableValue } from "../figma_app/84367";
import { KindEnum } from "../905/129884";
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
  let t = useSelector(t => formatI18nMessage(e.label));
  return jsx("div", {
    className: Pf,
    children: t
  }, `label-${e.label}`);
});
let R = memo(function ({
  item: e,
  recordingKey: t
}) {
  let r = useSelector(t => Yh(t.mirror.appModel, e.action));
  let i = useSelector(t => formatI18nMessage(e.action));
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
  let s = selectWithShallowEqual(e => i.filter(t => Zk(t) && Yh(e.mirror.appModel, t.action)));
  let o = useSelector(e => s.length > 0 && P(s[0], e));
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
  let r = getObservableValue(e.isActiveObservable ? e.isActiveObservable() : null, !1);
  let i = useSelector(t => P(e, t)) || r;
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
  let s = useSelector(t => Yh(t.mirror.appModel, e.action));
  let o = Um();
  let l = useSelector(t => e.tool !== DesignGraphElements.NONE && e.tool === t.mirror.appModel.currentTool && !TY(o));
  let d = useSelector(e => e.mirror.appModel.topLevelMode);
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
    children: [jsxs(ButtonPrimitive, {
      ...getTriggerProps(),
      "aria-label": e.getTitle(),
      "data-tooltip": e.getTitle(),
      "data-tooltip-type": KindEnum.TEXT,
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
  let o = useSelector(e => e.progressBarState.mode);
  let l = selectCurrentFile();
  let d = isUIHiddenOrLocked(o);
  if (!i(e)) return null;
  let c = e.dontChainRecordingKeys ? e.recordingKey : generateRecordingKey(r, e.recordingKey);
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
      throwTypeError(e);
  }
});
export function $$U3() {
  let e = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let t = useSelector(e => e.mirror.appModel.currentTool);
  let r = selectCurrentFile();
  let n = useSelector(e => e.progressBarState.mode);
  let s = isUIHiddenOrLocked(n);
  let o = useSelector(e => s ? !r?.canEdit : e.mirror.appModel.isReadOnly);
  let l = useSelector(e => e.mirror.appModel.isSceneReadOnly);
  let d = useSelector(e => !!e.user);
  return useCallback(i => !(!i || l && !i.nonEditorsAllowed || i.onlyShowInReadOnly && !(o && n !== UIVisibilitySetting.HIDE_UI) || i.hideInExtension && z4.getIsExtension()) && (!!r || !i.newFileDisabled) && (!!d || !!i.loggedOutAllowed) && (!i.editModes || -1 !== i.editModes.indexOf(e)) && (!i.showForTools || -1 !== i.showForTools.indexOf(t)), [l, o, n, r, d, e, t]);
}
export function $$B2() {
  return selectWithShallowEqual(e => {
    let t = {};
    for (let r in e.mirror.appModel) vg(r) && (t[r] = e.mirror.appModel[r]);
    return t;
  });
}
export function $$G0() {
  let e = $$B2();
  let t = selectWithShallowEqual(e => e.mirror.selectionProperties.resettableInstanceOverrides?.selectionOverrides);
  let r = selectCurrentFile();
  return useCallback(n => Yh(e, n.action) && (!n.featureFlags || n.featureFlags.every(e => getFeatureFlags()[e])) && (!n.isAvailable || n.isAvailable(e, t, r)), [e, t, r]);
}
export const PK = $$G0;
export const QE = $$j1;
export const z0 = $$B2;
export const z2 = $$U3;