import { c2 } from "../905/382883";
import { isNullish } from "../figma_app/95419";
import a from "classnames";
import { xM, Bx, x6 } from "../905/403166";
import { hm, IT } from "../905/380385";
import { F } from "../905/241044";
import { escapeHtml } from "../figma_app/930338";
import { Point } from "../905/736624";
import { mh, hp, XH, u5, Vc } from "../905/540111";
var s = a;
let $$_0 = 5;
let h = (e, t) => {
  if (isNullish(e.styles) && isNullish(t.styles)) return !0;
  if (isNullish(e.styles) !== isNullish(e.styles)) return !1;
  let r = e.styles?.filter(e => !t.styles?.includes(e));
  return r?.length === 0;
};
let m = (e, t) => !!(isNullish(e.user_annotated) && isNullish(t.user_annotated)) || isNullish(e.user_annotated) === isNullish(e.user_annotated) && c2(e.user_annotated, t.user_annotated);
export var $$g15 = (e => (e.EDITOR_MENTION = "editor_mention", e.COMMUNITY_MENTION = "community_mention", e.PLAIN_TEXT = "plain_text", e.EMOJI = "emoji", e.NONE = "none", e))($$g15 || {});
export function $$f11(e) {
  return 2 === Object.keys(e).length && Object.keys(e).includes("user_id") && Object.keys(e).includes("user_annotated") ? "editor_mention" : 2 === Object.keys(e).length && Object.keys(e).includes("profile_id") && Object.keys(e).includes("t") ? "community_mention" : Object.keys(e).includes("t") && !Object.keys(e).includes("link") && e.t && xM(e.t) ? "emoji" : Object.keys(e).includes("t") && !Object.keys(e).includes("link") ? "plain_text" : "none";
}
export function $$E9(e = [], t) {
  if (!e) return "";
  let r = e.reduce((e, t) => {
    let r = t.t || "";
    t.user_annotated ? r = t.user_annotated.handle : t.profile_id || null === t.profile_id ? r = "@" + t.t : t.children?.length && t.styles?.length ? t.children.forEach((n, i) => {
      (e || r) && (r += "\n");
      r += t.styles.includes("ol") ? `${i + 1}. ` : "* ";
      r += $$E9(n.children);
    }) : t.styles?.length && t.styles.includes("s") && (r = "");
    return e + r;
  }, "");
  t?.includeTrailingWhitespace || (r = r.replace(/\s+$/g, ""));
  return F(r) || "";
}
export function $$y3(e, t) {
  let r = $$E9(e, t);
  let n = Bx(r);
  return (globalThis.Intl?.Segmenter ? Array.from(new Intl.Segmenter().segment(n)) : Array.from(n)).length;
}
export function $$b2(e) {
  return 0 === e.length || /^\s*$/.test($$E9(e));
}
export function $$T4(e) {
  return $$b2(e) || $$E9(e).length <= 5;
}
export function $$I1(e) {
  let t = !(e.activeThread?.id === hm && e.newComment.discardAttempt < IT);
  let r = e.activeThread?.id ? e.threads[e.activeThread.id] : null;
  let n = !(r && !(r && $$T4(r.reply.messageMeta) && 0 === Object.keys(r.reply.attachments || {}).length) && (!r.discardAttempts || r.discardAttempts < IT));
  return t && n;
}
export function $$S13(e) {
  return $$E9(e).length >= 17500;
}
export function $$v10(e) {
  if (!Array.isArray(e)) return [];
  let t = function e(t) {
    let r = [];
    t.forEach(t => {
      t.user_id?.includes("invite-") ? t.t && r.push(t.t) : t.children && r.push(...e(t.children));
    });
    return r;
  }(e);
  !function e(t) {
    t.forEach(t => {
      t.user_id?.includes("invite-") ? delete t.user_id : t.children && e(t.children);
    });
    return t;
  }(e);
  return t;
}
export function $$A6(e) {
  e.length > 0 && (e[e.length - 1].t = e[e.length - 1].t?.trimEnd());
  return e;
}
export function $$x12(e, t) {
  let r = Math.min(Math.max(e.x, t.x), t.x + t.width);
  let n = Math.min(Math.max(e.y, t.y), t.y + t.height);
  return new Point(r, n);
}
export function $$N5(e) {
  return e.includes("-");
}
export const B2 = $$_0;
export const H3 = $$I1;
export const I = $$b2;
export const Kq = $$y3;
export const Kx = $$T4;
export const L4 = $$N5;
export const Pq = $$A6;
export const Rc = function e(t = [], r = !0) {
  let n = (Array.isArray(t) ? t : [{
    t: t
  }]).map(t => {
    let r = {
      t: null,
      styles: null,
      children: null,
      user: null,
      userId: null,
      link: null,
      isHashtag: null
    };
    if (t.user_annotated && t.user_id) return {
      ...r,
      userId: t.user_id,
      user: {
        ...t.user_annotated,
        name: t.user_annotated.name ?? null,
        imgUrl: t.user_annotated.img_url
      }
    };
    if (t.profile_id || null === t.profile_id) return {
      ...r,
      t: "@" + t.t,
      styles: ["lightbold"]
    };
    let n = {
      ...r,
      t: t.t || r.t,
      styles: t.styles || r.styles,
      link: t.link || r.link
    };
    t.children?.length && (n.children = t.children.map(t => ({
      ...r,
      children: e(t.children, !1)
    })));
    return n;
  });
  if (r && n.length) {
    let e = n[n.length - 1];
    e.t = e.t?.replace(/\s+$/g, "") ?? null;
  }
  return n;
};
export const Wf = function e(t, r) {
  if (t.length !== r.length) return !1;
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    let a = r[n];
    if (i.t !== a.t || i.user_id !== a.user_id) return !1;
    if (!m(i, a)) return !1;
    if (i.profile_id !== a.profile_id) return !1;else if (i.link !== a.link) return !1;else if (!h(i, a)) return !1;else if (!e(i.children ?? [], a.children ?? [])) return !1;
  }
  return !0;
};
export const _Z = $$E9;
export const cs = $$v10;
export const l5 = $$f11;
export const pV = $$x12;
export const q = $$S13;
export const sP = function e(t = []) {
  if (!t) return "";
  let r = t.reduce((t, r) => {
    let n = r.t || "";
    let i = r.styles || [];
    r.user_annotated ? (n = r.user_annotated.handle, i = ["lightbold"]) : r.profile_id || null === r.profile_id ? (n = "@" + r.t, i = ["lightbold"]) : r.children?.length ? r.children.forEach((r, a) => {
      (t || n) && (n += "\n");
      n += i.includes("ol") ? `${a + 1}. ` : "* ";
      n += e(r.children);
    }) : (n = x6(n).map(e => "string" == typeof e ? escapeHtml(e) : `<span class="${mh}">${e.props["data-text"]}</span>`).join("\n"), r.link && (i = ["lightbold"]));
    let a = [];
    i.forEach(e => {
      "b" === e ? a.push(hp) : "lightbold" === e ? a.push(XH) : "i" === e ? a.push(u5) : "s" === e && a.push(Vc);
    });
    a.length && (n = `<span class='${s()(...a)}'>` + n + "</span>");
    return t + n;
  }, "");
  return F(r) || "";
};
export const vj = $$g15;