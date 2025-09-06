import { Wh } from "../figma_app/615482";
import { lV } from "../figma_app/617606";
import { debug } from "../figma_app/465776";
import { o3, Or, ww } from "../figma_app/230278";
import { atom, atomStoreManager } from "../figma_app/27355";
let s = [...["accordion.tsx", "alert-dialog.tsx", "alert.tsx", "aspect-ratio.tsx", "avatar.tsx", "badge.tsx", "breadcrumb.tsx", "button.tsx", "calendar.tsx", "card.tsx", "carousel.tsx", "chart.tsx", "checkbox.tsx", "collapsible.tsx", "command.tsx", "context-menu.tsx", "dialog.tsx", "drawer.tsx", "dropdown-menu.tsx", "form.tsx", "hover-card.tsx", "input-otp.tsx", "input.tsx", "label.tsx", "menubar.tsx", "navigation-menu.tsx", "pagination.tsx", "popover.tsx", "progress.tsx", "radio-group.tsx", "resizable.tsx", "scroll-area.tsx", "select.tsx", "separator.tsx", "sheet.tsx", "sidebar.tsx", "skeleton.tsx", "slider.tsx", "sonner.tsx", "switch.tsx", "table.tsx", "tabs.tsx", "textarea.tsx", "toggle-group.tsx", "toggle.tsx", "tooltip.tsx", "use-mobile.ts", "utils.ts"].map(e => `/components/ui/${e}`), ...["ImageWithFallback.tsx"].map(e => `/components/figma/${e}`), "/styles/globals.css", "/guidelines/Guidelines.md", "/Attributions.md", "/" + o3, "/" + Or, "/" + ww, "/App.tsx"];
debug(s.every(e => e.startsWith("/")), "MAKE_SYSTEM_FILES must be absolute paths");
export let $$l9 = Wh(() => atom(new Set()));
export function $$d10(e) {
  let t = e.split("/");
  let r = "";
  let n = new Set();
  for (let e of t) {
    r = `${r}/${e}`;
    n.add(r);
  }
  atomStoreManager.set($$l9, e => new Set([...e, ...n]));
}
export function $$c5(e, t, r) {
  let n = function (e, t) {
    let r = e.getInternalCanvas();
    return r ? r.childrenNodes.filter(e => $$h7(e) && (!t || e.belongsToCodeLibrary?.guid === t)).map(e => ({
      guid: e.guid,
      name: e.name,
      codeFilePath: e.codeFilePath,
      belongsToCodeLibraryGuid: e.belongsToCodeLibrary?.guid
    })) : [];
  }(e, r);
  let i = p(t) || "";
  let a = t ? n.filter(e => {
    if (!e.codeFilePath) return !1;
    let t = p(e.codeFilePath) || "";
    return t === i || t.startsWith(i + "/");
  }).map(e => ({
    ...e,
    codeFilePath: function (e) {
      let t = p(e);
      let r = t?.split("/").slice(1);
      return r?.join("/");
    }(p(e?.codeFilePath ?? "") ?? "") ?? ""
  })) : n;
  let s = {
    name: t && t.split("/").pop() || "root",
    children: [],
    type: "folder",
    path: ""
  };
  let o = s;
  for (let e of a) {
    for (let t of e.codeFilePath?.split("/") ?? []) {
      if (!t) continue;
      let e = o.children.find(e => e.name === t && "folder" === e.type);
      e || (e = {
        name: t,
        children: [],
        type: "folder",
        path: `${o.path}/${t}`
      }, o.children.push(e));
      o = e;
    }
    o.children.push({
      ...e,
      type: "file"
    });
    o = s;
  }
  let l = e => {
    let t = e.children.map(e => "folder" === e.type ? l(e) : e);
    if (1 === t.length) {
      let r = t[0];
      if (r?.type === "folder") return {
        type: "folder",
        name: e.name && r.name ? `${e.name}/${r.name}` : e.name || r.name,
        children: r.children,
        path: r.path
      };
    }
    return {
      ...e,
      children: t
    };
  };
  return l(s);
}
export function $$u6(e, t, r) {
  let n = e.getInternalCanvas();
  if (!n) return null;
  for (let e of n.childrenNodes) if ($$h7(e) && e.codeFilePath === t && e.name === r) return e;
  return null;
}
function p(e) {
  if (e) {
    e.startsWith("/") && (e = e.slice(1));
    e.endsWith("/") && (e = e.slice(0, -1));
    return e;
  }
}
export function $$_4(e, t) {
  return p(e) === p(t);
}
export function $$h7(e) {
  return !!(e && e.isCodeFile && !e.isSoftDeleted && e.codeFilePath?.toString() !== $$m2);
}
let $$m2 = ".figma_internal";
let $$g3 = ".figma_internal/deleted";
let $$f0 = "/Attributions.md";
function E(e, t) {
  switch (t) {
    case lV.FIGMAKE:
      return e?.isEntrypointCodeFile || e?.codeFileFullPathWithoutScheme === "/App.tsx";
    case lV.CODE_IN_SITES:
      return e?.isEntrypointCodeFile;
    default:
      return !1;
  }
}
export function $$y8(e, t) {
  switch (t) {
    case lV.FIGMAKE:
      if (!e) return !1;
      return s.includes(e?.codeFileFullPathWithoutScheme) || E(e, t);
    case lV.CODE_IN_SITES:
      return E(e, t);
    default:
      return !1;
  }
}
export { zM } from "../figma_app/617606";
export const e = $$f0;
export const n0 = $$m2;
export const GX = $$g3;
export const iD = $$_4;
export const Ns = $$c5;
export const $v = $$u6;
export const kv = $$h7;
export const QK = $$y8;
export const wy = $$l9;
export const ci = $$d10;