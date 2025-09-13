import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, createElement } from "react";
import { d as _$$d } from "../905/976845";
import { l as _$$l } from "../905/509505";
import { useAtomWithSubscription } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { tf } from "../figma_app/831799";
import { u as _$$u } from "../905/389684";
import { Xh } from "../figma_app/803787";
import { Lc } from "../figma_app/745458";
import { LibraryTabEnum } from "../figma_app/633080";
import { D } from "../figma_app/268271";
import { KindEnum } from "../905/129884";
import { c as _$$c } from "../905/606579";
import { Xm } from "../905/935570";
import { Pf } from "../figma_app/435826";
import { o5 } from "../figma_app/778125";
import { A as _$$A } from "../4711/623519";
import { A as _$$A2 } from "../b2835def/773612";
export function $$v1({
  entrypoint: e,
  hideIfNoUpdates: t,
  initialTabOverride: s
}) {
  let r = Xm();
  let i = useAtomWithSubscription(Lc);
  let o = useAtomWithSubscription(Xh(r));
  let c = _$$c();
  let {
    isLibraryModalShown,
    onToggleLibraryModal
  } = _$$u({
    entrypoint: e,
    modalType: "editor",
    initialTab: s ?? (c ? LibraryTabEnum.RECOMMENDED : i ? LibraryTabEnum.UPDATES : LibraryTabEnum.LIBRARIES)
  });
  let b = useMemo(() => i ? getI18nString("fullscreen.libraries_button.tooltip.updates_to_pull") : o ? getI18nString("fullscreen.libraries_button.tooltip.updates_to_push") : getI18nString("fullscreen.libraries_button.tooltip.no_updates"), [i, o]);
  let C = i || o;
  Pf({
    showBadge: C,
    hasChangesToPull: i,
    disabled: !1
  });
  let j = !(t && !i && !o);
  return {
    expanded: isLibraryModalShown,
    label: b,
    icon: _$$l,
    onClick: onToggleLibraryModal,
    shouldShow: j,
    isUI3: !0,
    badge: C
  };
}
export function $$S0({
  recordingKey: e,
  onSetKeyboardNavigationElement: t,
  ...s
}) {
  let {
    expanded,
    label,
    icon,
    onClick,
    shouldShow,
    isUI3,
    badge
  } = $$v1(s);
  return shouldShow ? jsx("div", {
    className: "library_modal_button--teamLibraryIcon--EBc7q",
    "data-onboarding-key": "library",
    children: isUI3 ? jsxs(k, {
      "aria-label": label,
      "aria-expanded": expanded,
      ref: t,
      recordingKey: generateRecordingKey(e, "teamLibrary"),
      onClick,
      htmlAttributes: {
        "data-onboarding-key": D
      },
      children: [createElement(icon), badge ? jsxs("div", {
        className: "library_modal_button--badgeContainer--ebOHQ",
        children: [jsx("span", {
          className: "library_modal_button--updatesBadge--B4nW-",
          "data-testid": "library-button-badge"
        }), " "]
      }) : null]
    }) : jsx(o5, {
      ref: t,
      "data-onboarding-key": D,
      "data-tooltip": getI18nString("fullscreen.libraries_button.tooltip.no_updates"),
      "data-tooltip-type": KindEnum.TEXT,
      fallbackSvg: _$$A2,
      innerText: "Team Library",
      onClick,
      recordingKey: generateRecordingKey(e, "teamLibrary"),
      selected: expanded,
      svg: _$$A
    })
  }) : null;
}
let k = tf(_$$d);
export const b = $$S0;
export const A = $$v1;