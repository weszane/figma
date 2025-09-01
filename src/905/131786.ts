import { xb } from "../figma_app/465776";
import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { l as _$$l } from "../905/716947";
import { FS } from "../figma_app/930338";
import { nh, jD } from "../figma_app/933328";
import { ov } from "../figma_app/646357";
import { PW } from "../figma_app/633080";
export function $$u1(e, t, i, n, r, a, o) {
  let l = $$p3(e, t, i, n, r, o);
  let d = {
    ...l
  };
  for (let [e, t] of Object.entries(a)) {
    let i = _$$l(e);
    let n = l[i];
    n ? d[i] = [...n, ...t] : d[i] = t;
  }
  return d;
}
export function $$p3(e, t, i, n, r, a) {
  let s = ov(e, t, i, n, r, a);
  let o = {};
  for (let e of s) {
    if (!e.library_key) continue;
    let t = e.library_key;
    o[t] ??= [];
    o[t].push(e);
  }
  return o;
}
export function $$m0(e, t, i, n) {
  return new Promise((s, o) => {
    if (!e.content_hash) {
      s();
      return;
    }
    n(nh({
      style: t,
      callback: t => {
        l7.user("replace-libraries", () => glU.swapAllUsesOfStyle(e.key, t, i)) ? s() : o();
      },
      omitFullscreenCommit: !0
    }));
  });
}
export async function $$h2(e, t) {
  let i = await jD(t);
  let n = i?.newSymbolOrStateGroupGuid;
  n && l7.user("replace-libraries", () => {
    glU.swapAllInstancesOfComponentOrStateGroup(e, n, t.type === PW.COMPONENT ? "" : t.default_state_key);
  });
}
export function $$g6(e, t) {
  let i = Object.create(null);
  let n = Object.create(null);
  let r = Object.create(null);
  for (let e of t.components) i[FS(e.name)] = e;
  for (let e of t.stateGroups) n[FS(e.name)] = e;
  for (let e of t.styles) {
    let {
      name,
      style_type
    } = e;
    let n = r[style_type] || Object.create(null);
    n[FS(name)] = e;
    r[style_type] = n;
  }
  let a = {
    components: new Map(),
    styles: new Map()
  };
  for (let t of [...e.components, ...e.stateGroups]) {
    let e = n[FS(t.name)] || i[FS(t.name)] || null;
    a.components.set(t, e);
  }
  for (let t of e.styles) {
    let e = r[t.style_type]?.[FS(t.name)] || null;
    a.styles.set(t, e);
  }
  return a;
}
export function $$f4(e) {
  return [...e].sort((e, t) => e.name < t.name ? -1 : 1);
}
export function $$_5(e = []) {
  let t = {
    components: [],
    stateGroups: [],
    styles: []
  };
  for (let i of $$f4(e)) i.type === PW.STYLE ? t.styles.push(i) : i.type === PW.STATE_GROUP ? t.stateGroups.push(i) : i.type === PW.VARIABLE_SET || i.type === PW.VARIABLE || (i.type === PW.COMPONENT ? t.components.push(i) : i.type === PW.MODULE || xb(i, "Unhandled item type"));
  return t;
}
export const $l = $$m0;
export const MV = $$u1;
export const RJ = $$h2;
export const TE = $$p3;
export const VV = $$f4;
export const px = $$_5;
export const q = $$g6;