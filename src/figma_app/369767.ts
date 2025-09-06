import { jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { I as _$$I } from "../905/932503";
import { memo } from "react";
import { O as _$$O } from "../905/587457";
import { Nfd } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { Pt } from "../figma_app/806412";
import { J } from "../1577/181415";
import { getI18nString } from "../905/303541";
import { tc } from "../905/15667";
import { tf, fu } from "../figma_app/831799";
import { Y5 } from "../figma_app/455680";
import { q } from "../figma_app/590592";
import { tJ } from "../figma_app/741237";
import { q5 } from "../figma_app/516028";
import { FProductAccessType } from "../figma_app/191312";
import { wH } from "../figma_app/680166";
import { f0 } from "../figma_app/707808";
import { Ib } from "../905/129884";
import { q as _$$q } from "../905/202542";
import { C5, h5 } from "../figma_app/812915";
import { s0 } from "../figma_app/115923";
import { j } from "../figma_app/397127";
import { p as _$$p } from "../figma_app/952952";
import { h as _$$h } from "../figma_app/935454";
import { i as _$$i } from "../905/46262";
let l = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M17.287 6.044c-.561.24-1.22.22-1.787-.106a2 2 0 0 1-.986-1.495c-.07-.576-.495-1.253-1.297-1.361a9 9 0 0 0-2.434 0c-.802.108-1.228.785-1.297 1.36A2 2 0 0 1 8.5 5.939a2 2 0 0 1-1.787.106c-.533-.227-1.33-.197-1.826.44a9 9 0 0 0-1.22 2.111c-.307.749.067 1.456.53 1.803.49.367.803.948.803 1.602s-.313 1.235-.802 1.602c-.464.347-.838 1.054-.531 1.803.311.761.724 1.47 1.22 2.11.495.638 1.293.668 1.826.44a2 2 0 0 1 1.787.107c.566.327.913.889.986 1.495.07.576.495 1.253 1.297 1.361a9 9 0 0 0 2.434 0c.802-.108 1.227-.785 1.297-1.36.073-.607.42-1.169.986-1.496a2 2 0 0 1 1.787-.106c.533.227 1.33.197 1.826-.44.496-.64.909-1.35 1.22-2.111.307-.749-.067-1.456-.53-1.803A2 2 0 0 1 19 12c0-.654.313-1.235.802-1.602.464-.347.838-1.054.531-1.803a9 9 0 0 0-1.22-2.11c-.495-.638-1.293-.668-1.826-.44M15 6.804c.85.49 1.841.518 2.68.16.224-.096.493-.058.643.134.442.57.808 1.2 1.085 1.876.092.226-.01.478-.206.624A3 3 0 0 0 18 12c0 .983.472 1.855 1.203 2.402.195.146.297.398.205.624a8 8 0 0 1-1.085 1.876c-.15.192-.419.23-.643.134a3 3 0 0 0-2.68.16 3 3 0 0 0-1.479 2.241c-.03.243-.196.458-.438.49a8 8 0 0 1-2.166 0c-.242-.032-.409-.247-.438-.49A3 3 0 0 0 9 17.197a3 3 0 0 0-2.68-.161c-.224.096-.493.058-.643-.134a8 8 0 0 1-1.085-1.876c-.092-.226.01-.478.205-.624A3 3 0 0 0 6 12c0-.983-.472-1.855-1.203-2.402-.195-.146-.297-.398-.205-.624a8 8 0 0 1 1.085-1.876c.15-.192.419-.23.643-.134.839.358 1.83.33 2.68-.16a3 3 0 0 0 1.479-2.241c.03-.243.196-.458.438-.49a8 8 0 0 1 2.166 0c.242.032.409.247.438.49.11.905.628 1.75 1.479 2.24M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7",
      clipRule: "evenodd"
    })
  }) : jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M17.287 6.044c-.561.24-1.22.22-1.787-.106a2 2 0 0 1-.986-1.495c-.07-.576-.495-1.253-1.297-1.361a9 9 0 0 0-2.434 0c-.802.108-1.228.785-1.297 1.36A2 2 0 0 1 8.5 5.939a2 2 0 0 1-1.787.106c-.533-.227-1.33-.197-1.826.44a9 9 0 0 0-1.22 2.111c-.307.749.067 1.456.53 1.803.49.367.803.948.803 1.602s-.313 1.235-.802 1.602c-.464.347-.838 1.054-.531 1.803.311.761.724 1.47 1.22 2.11.495.638 1.293.668 1.826.44a2 2 0 0 1 1.787.107c.566.327.913.889.986 1.495.07.576.495 1.253 1.297 1.361a9 9 0 0 0 2.434 0c.802-.108 1.227-.785 1.297-1.36.073-.607.42-1.169.986-1.496a2 2 0 0 1 1.787-.106c.533.227 1.33.197 1.826-.44.496-.64.909-1.35 1.22-2.111.307-.749-.067-1.456-.53-1.803A2 2 0 0 1 19 12c0-.654.313-1.235.802-1.602.464-.347.838-1.054.531-1.803a9 9 0 0 0-1.22-2.11c-.495-.638-1.293-.668-1.826-.44m-3.766-1.481c.11.905.628 1.75 1.479 2.24a2.99 2.99 0 0 0 2.68.161c.224-.096.493-.058.643.134.442.57.808 1.2 1.085 1.876.092.226-.01.478-.206.624A3 3 0 0 0 18 12c0 .983.472 1.855 1.203 2.402.195.146.297.398.205.624a8 8 0 0 1-1.085 1.876c-.15.192-.419.23-.643.134a3 3 0 0 0-2.68.16 3 3 0 0 0-1.479 2.241c-.03.243-.196.458-.438.49a8 8 0 0 1-2.166 0c-.242-.032-.409-.247-.438-.49A3 3 0 0 0 9 17.197a3 3 0 0 0-2.68-.161c-.224.096-.493.058-.643-.134a8 8 0 0 1-1.085-1.876c-.092-.226.01-.478.205-.624A3 3 0 0 0 6 12c0-.983-.472-1.855-1.203-2.402-.195-.146-.297-.398-.205-.624a8 8 0 0 1 1.085-1.876c.15-.192.419-.23.643-.134.839.358 1.83.33 2.68-.16a3 3 0 0 0 1.479-2.241c.03-.243.196-.458.438-.49a8 8 0 0 1 2.166 0c.242.032.409.247.438.49M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
      clipRule: "evenodd"
    })
  });
});
export function $$P2(e) {
  let [t, r] = useAtomValueAndSetter(s0);
  let n = C5();
  let i = q();
  let {
    closeOverlay
  } = _$$h();
  let s = Xr(j);
  let o = e ?? _$$p.WEBSITE;
  return () => {
    s(o);
    i && Y5.triggerAction("toggle-sidebar", {
      source: "site_metadata_button"
    });
    r(Nfd.SETTINGS);
    n(f0.SETTINGS);
    closeOverlay();
    let t = getSingletonSceneGraph().getCurrentPage();
    e ? e !== t?.guid && (getSingletonSceneGraph().setCurrentPageFromNodeAsync(e), tJ([e])) : t && t.setSelectionToSingleNode("-1:-1");
  };
}
export function $$D1({
  recordingKey: e,
  page: t
}) {
  let r = q5();
  let s = $$P2(t);
  return r?.canEdit ? jsx(K, {
    "aria-label": getI18nString("sites.metadata.modal_button_site"),
    onClick: s,
    recordingKey: Pt(e, "websiteSettingsButton"),
    htmlAttributes: {
      "data-tooltip": getI18nString("sites.metadata.modal_button_site"),
      "data-tooltip-type": Ib.TEXT
    },
    children: jsx(_$$I, {})
  }) : null;
}
let k = tf(J);
export function $$M0({
  recordingKey: e
}) {
  let t = h5();
  let r = C5();
  let i = Xr(j);
  let {
    handleUpgrade,
    getUpgradeEligibility,
    getIsUpgradeHandlerLoading
  } = wH({
    folderId: null,
    entryPoint: tc.SITE_SETTINGS
  });
  let d = getUpgradeEligibility(FProductAccessType.FIGMAKE);
  let c = getI18nString("figmake.metadata.modal_button_site");
  let E = Pt(e, "websiteSettingsButton");
  if (getFeatureFlags().bake_monetization_plan && d === _$$q.CAN_UPGRADE) return jsx(fu, {
    name: "site_settings_button_upgrade_entry_point",
    children: jsx(k, {
      "aria-label": c,
      recordingKey: E,
      htmlAttributes: {
        "data-tooltip": c,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip-max-width": 200,
        "data-tooltip-show-below": !0
      },
      onClick: handleUpgrade({
        licenseType: FProductAccessType.FIGMAKE,
        upgradeReason: _$$i.SITE_SETTINGS,
        entryPoint: tc.SITE_SETTINGS
      }),
      children: jsx(l, {})
    })
  });
  let y = getFeatureFlags().bake_monetization_plan && (getIsUpgradeHandlerLoading() || d !== _$$q.UPGRADE_NOT_NEEDED);
  return jsx(J, {
    "aria-label": c,
    disabled: y,
    onClick: () => {
      t ? r(f0.FILE) : (r(f0.SETTINGS), i(_$$p.WEBSITE));
    },
    recordingKey: E,
    htmlAttributes: {
      "data-tooltip": c,
      "data-tooltip-type": Ib.TEXT
    },
    children: jsx(l, {})
  });
}
export const MR = $$M0;
export const el = $$D1;
export const y2 = $$P2;