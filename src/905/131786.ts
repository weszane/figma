import { throwTypeError } from "../figma_app/465776";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { l as _$$l } from "../905/716947";
import { removeSpaces } from "../figma_app/930338";
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
        permissionScopeHandler.user("replace-libraries", () => Fullscreen.swapAllUsesOfStyle(e.key, t, i)) ? s() : o();
      },
      omitFullscreenCommit: !0
    }));
  });
}
export async function $$h2(e, t) {
  let i = await jD(t);
  let n = i?.newSymbolOrStateGroupGuid;
  n && permissionScopeHandler.user("replace-libraries", () => {
    Fullscreen.swapAllInstancesOfComponentOrStateGroup(e, n, t.type === PW.COMPONENT ? "" : t.default_state_key);
  });
}
export function $$g6(e, t) {
  let i = Object.create(null);
  let n = Object.create(null);
  let r = Object.create(null);
  for (let e of t.components) i[removeSpaces(e.name)] = e;
  for (let e of t.stateGroups) n[removeSpaces(e.name)] = e;
  for (let e of t.styles) {
    let {
      name,
      style_type
    } = e;
    let n = r[style_type] || Object.create(null);
    n[removeSpaces(name)] = e;
    r[style_type] = n;
  }
  let a = {
    components: new Map(),
    styles: new Map()
  };
  for (let t of [...e.components, ...e.stateGroups]) {
    let e = n[removeSpaces(t.name)] || i[removeSpaces(t.name)] || null;
    a.components.set(t, e);
  }
  for (let t of e.styles) {
    let e = r[t.style_type]?.[removeSpaces(t.name)] || null;
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
  for (let i of $$f4(e)) i.type === PW.STYLE ? t.styles.push(i) : i.type === PW.STATE_GROUP ? t.stateGroups.push(i) : i.type === PW.VARIABLE_SET || i.type === PW.VARIABLE || (i.type === PW.COMPONENT ? t.components.push(i) : i.type === PW.MODULE || throwTypeError(i, "Unhandled item type"));
  return t;
}
export const $l = $$m0;
export const MV = $$u1;
export const RJ = $$h2;
export const TE = $$p3;
export const VV = $$f4;
export const px = $$_5;
export const q = $$g6;