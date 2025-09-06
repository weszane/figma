import { useCallback, useEffect } from "react";
import { languageCodes } from "../905/816253";
import { Ez5 } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { FJ } from "../905/508367";
import { jm } from "../figma_app/416935";
import { isDevEnvironment } from "../figma_app/169182";
import { my } from "../figma_app/976749";
import { Pc } from "../905/372672";
import { FEditorType } from "../figma_app/53721";
let h = atom("hidden");
let $$m2 = atom(1);
let $$g6 = atom(void 0);
let $$f4 = atom(void 0);
let $$E3 = 320;
let $$y9 = 500;
let $$b10 = 320;
export function $$T0() {
  let [e, t] = useAtomValueAndSetter(h);
  let r = getFeatureFlags().in_product_help_and_learning;
  let i = my() === FEditorType.Design;
  let l = !!r && i;
  let d = l ? e : "hidden";
  let c = useCallback(() => {
    t("hidden");
    Ez5?.uiState().inProductHelpSidePanelWidth.set(0);
  }, [t]);
  let p = useCallback(() => {
    window.innerWidth < 1440 ? (t("floating_modal"), Ez5?.uiState().inProductHelpSidePanelWidth.set(0)) : (t("side_panel"), Ez5?.uiState().inProductHelpSidePanelWidth.set($$E3));
  }, [t]);
  let m = useCallback(() => {
    l && p();
  }, [l, p]);
  useEffect(() => {
    "hidden" === d && Ez5?.uiState().inProductHelpSidePanelWidth.set(0);
  }, [d]);
  return {
    canShowInProductHelp: l,
    inProductHelpViewType: d,
    hideInProductHelpView: c,
    showInProductHelpView: m,
    updateInProductHelpViewOnWindowWidthResize: p
  };
}
export function $$I7(e) {
  return isDevEnvironment() || jm(e) || !!e?.endsWith("@dev.figma.com");
}
export function $$S8({
  propertiesPanelWidth: e
}) {
  return {
    x: window.innerWidth - (e + $$b10),
    y: 0
  };
}
var v = (e => (e.EN = "en-us", e.JA = "ja", e))(v || {});
export function $$A1(e) {
  switch (e) {
    case languageCodes.JA:
      return "ja";
    case languageCodes.EN:
    default:
      return "en-us";
  }
}
export function $$x5() {
  let e = Pc().locale;
  return async t => {
    let r = $$A1(e);
    try {
      let e = await fetch(`https://figma.zendesk.com/api/v2/help_center/${r}/articles/${t}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!e.ok) throw Error(`Failed to fetch article ${t}: ${e.status} ${e.statusText}`);
      return (await e.json()).article;
    } catch (e) {
      FJ(`https://help.figma.com/hc/en-us/articles/${t}`, "_blank", "noopener");
    }
  };
}
export const A5 = $$T0;
export const FI = $$A1;
export const J9 = $$m2;
export const Jm = $$E3;
export const QU = $$f4;
export const Yj = $$x5;
export const Zf = $$g6;
export const ci = $$I7;
export const iM = $$S8;
export const tL = $$y9;
export const yx = $$b10;