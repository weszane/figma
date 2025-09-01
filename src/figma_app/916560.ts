import { getFeatureFlags } from "../905/601108";
import { sanitize } from "../vendor/197638";
import { M } from "../905/994901";
let s = new Set(["airtable.com", "asana.com", "calendly.com", "chorus.ai", "coda.io", "codepen.io", "docs.google.com", "drive.google.com", "paper.dropbox.com", "figma.com", "framer.com", "github.com", "gmail.com", "atlassian.com", "loom.com", "lottiefiles.com", "lucidchart.com", "maze.co", "office.com", "miro.com", "mode.com", "mural.co", "notion.so", "quip.com", "rollbar.com", "sentry.io", "slab.com", "slideshare.net", "surveymonkey.com", "tableau.com", "trello.com", "typeform.com", "usertesting.com", "whimsical.com", "behance.net", "dribbble.com", "facebook.com", "google.com", "maps.google.com ", "instagram.com", "linkedin.com", "medium.com", "pinterest.com", "soundcloud.com", "spotify.com", "open.spotify.com", "tiktok.com", "twitter.com", "vimeo.com", "youtu.be", "youtube.com"]);
let o = RegExp("^<iframe[^>]+src\\s*=\\s*(?:(?:\"([^\">]+)\")|(?:'([^'>]+)')).*><\\/iframe>$");
let l = RegExp("^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$", "i");
export function $$d3(e) {
  let t = new URL(e).hostname;
  0 === t.indexOf("www.") && (t = t.slice(4));
  return t;
}
export function $$c2(e) {
  if (!getFeatureFlags().figjam_embeds_allowlist) return !0;
  try {
    let t = $$d3(e);
    return s.has(t);
  } catch (e) {
    console.error("Invalid URL in embed");
    return !1;
  }
}
export function $$u1(e) {
  if (!e.startsWith("<iframe")) return "";
  let t = sanitize(e, {
    ALLOWED_TAGS: ["iframe"],
    ALLOWED_ATTR: ["src"]
  });
  let r = o.exec(t);
  return r && r.length > 1 ? r[1] : "";
}
export function $$p4(e) {
  let t = $$u1(e);
  let r = t || e;
  let n = r.startsWith("http://") || r.startsWith("https://") ? r : `https://${r}`;
  return l.test(n) ? {
    isFromIFrame: !!t,
    url: n
  } : null;
}
export function $$_0(e, t, r) {
  let n = $$p4(t.trim());
  return n ? (e(M({
    clipboardText: t,
    url: n.url,
    isTextIframe: n.isFromIFrame,
    entrypoint: r
  })), {
    valid: !0
  }) : {
    valid: !1,
    reason: "Text was not a valid URL or IFrame"
  };
}
export function $$h5(e = "", t) {
  if (!e.startsWith("<meta charset='utf-8'><div><a href='https://app.asana.com")) return null;
  let r = sanitize(e, {
    ALLOWED_TAGS: ["a"],
    ALLOWED_ATTR: ["href"]
  }).split("<a");
  let n = /href="(https:\/\/app\.asana\.com[^"]*)"/;
  let a = [];
  for (let e of r) {
    let t = e.match(n);
    t && t[1] && a.push({
      url: t[1],
      isFromIFrame: !1
    });
  }
  return a.length !== t.split("\n").length ? null : a;
}
export const CV = $$_0;
export const Cg = $$u1;
export const Cy = $$c2;
export const Js = $$d3;
export const KJ = $$p4;
export const LU = $$h5;