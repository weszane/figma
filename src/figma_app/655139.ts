import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { useAtomWithSubscription } from "../figma_app/27355";
import { D } from "../905/273829";
import { getI18nString } from "../905/303541";
import { S8, uz, A0, p, Ap, LK, NU, MT } from "../905/359509";
import { $1, j8, S0, _P } from "../figma_app/844435";
import { M5 } from "../figma_app/300692";
import { m, X } from "../905/661977";
export function $$p4(e) {
  let t = "string" == typeof e ? {
    type: "first-party",
    id: e
  } : e;
  return t && t.id && ("first-party" !== t.type || S8[t.id]) ? t : {
    type: "first-party",
    id: uz
  };
}
export function $$_1() {
  return $$h2($$m3());
}
export function $$h2(e) {
  let t = $1();
  let r = j8();
  return useMemo(() => ({
    format(n) {
      if (n?.type === "first-party") switch (n?.id) {
        case A0:
          return "CssBuilder";
        case uz:
          return getI18nString("dev_handoff.code.lang_css");
        case p:
          return getI18nString("dev_handoff.code.lang_swiftui");
        case Ap:
          return getI18nString("dev_handoff.code.lang_uikit");
        case LK:
          return getI18nString("dev_handoff.code.lang_compose");
        case NU:
          return getI18nString("dev_handoff.code.lang_android_xml");
        case MT:
          return getI18nString("dev_handoff.code.lang_figma");
      }
      if (e) {
        let i = n?.type === "local-plugin" ? t[n.id] : n?.type === "published-plugin" && e.plugin_id === n?.id ? r[n.id] ?? e : null;
        if (i) return 1 === m(i).length ? i.name : X(i, n?.pluginLanguage ?? "").label ?? i.name;
      }
      return "";
    }
  }), [r, t, e]);
}
export function $$m3() {
  return $$g0($$E5());
}
export function $$g0(e) {
  let t = S0((e?.type !== "first-party" ? e?.id : "") ?? "", {
    searchLocalPlugins: !0,
    searchPublishedPlugins: !0
  });
  let {
    plugin
  } = _P((e?.type === "published-plugin" ? e?.id : "0") ?? "0", e?.type === "published-plugin");
  if (!e) return null;
  let n = t || plugin;
  return n && M5(n) ? n : null;
}
export function $$f6(e, t) {
  if (!e || !e.codeSyntax) return null;
  switch (t) {
    case uz:
    case A0:
      return e.codeSyntax[0] ?? null;
    case LK:
    case NU:
      return e.codeSyntax[1] ?? null;
    case p:
    case Ap:
      return e.codeSyntax[2] ?? null;
  }
  return null;
}
export function $$E5() {
  let e = useAtomWithSubscription(D);
  let t = useSelector(e => e.mirror.appModel.devHandoffCodeLanguage);
  let r = useSelector(e => e.selectedView);
  let o = t;
  "orgAdminSettings" === r.view && e && (o = e);
  return useMemo(() => $$p4(o), [o]);
}
export const AC = $$g0;
export const P0 = $$_1;
export const Pt = $$h2;
export const QN = $$m3;
export const XP = $$p4;
export const v4 = $$E5;
export const xv = $$f6;