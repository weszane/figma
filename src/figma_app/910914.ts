import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { aq } from "../figma_app/59509";
import { Q } from "../905/363675";
import { $ } from "../905/692618";
import { IAssertResource } from "../figma_app/763686";
import { buildUploadUrl } from "../figma_app/169182";
import { f as _$$f } from "../figma_app/258006";
import { getI18nString, renderI18nText } from "../905/303541";
import { b } from "../905/985254";
import { ax } from "../figma_app/741237";
import { LS } from "../905/782918";
let g = "hint_panels--icon--EMIdH";
let f = buildUploadUrl("aae0db2814117595e45cc509d52e79e7cc31333c");
let E = buildUploadUrl("ae3807b6d650b52da20879078b85a0df23ee056a");
let $$y0 = "dev_handoff_dismissed_inspect_panel_plugins_hint";
export function $$b1() {
  let e = LS();
  let t = useDispatch();
  let r = useCallback(() => {
    t(b({
      [$$y0]: !0
    }));
  }, [t]);
  let c = useCallback(() => {
    ax(IAssertResource.PLUGIN);
    r();
  }, [r]);
  return e ? jsx("div", {
    className: "hint_panels--hintPanel--MUqNV",
    children: jsxs(aq, {
      variant: "default",
      icon: jsxs("div", {
        className: "hint_panels--iconRow--SXq7J",
        children: [jsx("img", {
          alt: "",
          className: g,
          src: f
        }), jsx("div", {
          className: g,
          children: jsx(_$$f, {})
        }), jsx("img", {
          alt: "",
          className: g,
          src: E
        })]
      }),
      onDismiss: r,
      children: [jsx(Q, {
        title: getI18nString("dev_handoff.inspect_panel.plugins_hint.title"),
        children: renderI18nText("dev_handoff.inspect_panel.plugins_hint")
      }), jsx($, {
        onClick: c,
        children: renderI18nText("dev_handoff.inspect_panel.plugins_hint.link")
      })]
    })
  }) : null;
}
export const xb = $$y0;
export const FO = $$b1;