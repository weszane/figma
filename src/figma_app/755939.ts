import { eU } from "../figma_app/27355";
import { Wh } from "../figma_app/615482";
var $$a23 = (e => (e.ALL = "ALL", e.ORG = "ORG", e.START_FROM_SCRATCH = "START_FROM_SCRATCH", e.NEW_TEMPLATE = "NEW_TEMPLATE", e.TEAM = "TEAM", e.TEMPLATES = "TEMPLATES", e.USE_CASE = "USE_CASE", e.IMPORT_FROM_DESIGN = "IMPORT_FROM_DESIGN", e))($$a23 || {});
let $$s17 = Wh(() => eU(!1));
let $$o9 = eU({
  type: "ALL"
});
let $$l12 = Wh(() => eU(!0));
let d = eU({});
let $$c8 = eU(e => e(d), (e, t, r, n) => {
  t(d, e => ({
    ...e,
    [r]: n
  }));
});
let $$u10 = eU(null, (e, t) => {
  t(d, {});
});
let $$p4 = Wh(() => eU(null));
let $$_19 = Wh(() => eU(!1));
let $$h22 = Wh(() => eU(!1));
let $$m0 = eU(Math.random());
let $$g14 = Wh(() => eU("COMMUNITY"));
let $$f20 = Wh(() => eU(""));
let $$E1 = Wh(() => eU(!0));
let $$y24 = Wh(() => eU(!0));
let $$b3 = Wh(() => eU(!0));
export var $$T2 = (e => (e.DEFAULT = "DEFAULT", e.BROWSING_TEMPLATE = "BROWSING_TEMPLATE", e))($$T2 || {});
let $$I21 = Wh(() => eU({
  type: "DEFAULT"
}));
let $$S5 = Wh(() => eU(!1));
export var $$v15 = (e => (e.PUBLISH_HUB_FILE_INITIATED = "PUBLISH_HUB_FILE_INITIATED", e.PUBLISH_HUB_FILE_COMPLETED = "PUBLISH_HUB_FILE_COMPLETED", e.PUBLISH_HUB_FILE_ERRORED = "PUBLISH_HUB_FILE_ERRORED", e.PUBLISH_TEMPLATE_INITIATED = "PUBLISH_TEMPLATE_INITIATED", e.PUBLISH_TEMPLATE_COMPLETED = "PUBLISH_TEMPLATE_COMPLETED", e.PUBLISH_TEMPLATE_ERRORED = "PUBLISH_TEMPLATE_ERRORED", e.UNPUBLISH_TEMPLATE_INITIATED = "UNPUBLISH_TEMPLATE_INITIATED", e.UNPUBLISH_HUB_FILE_INITIATED = "UNPUBLISH_HUB_FILE_INITIATED", e.UNPUBLISH_COMPLETED = "UNPUBLISH_COMPLETED", e.UNPUBLISH_TEMPLATE_ERRORED = "UNPUBLISH_ERRORED", e.CLEARED = "CLEARED", e))($$v15 || {});
let A = ["PUBLISH_HUB_FILE_INITIATED", "PUBLISH_TEMPLATE_INITIATED", "UNPUBLISH_TEMPLATE_INITIATED", "UNPUBLISH_HUB_FILE_INITIATED"];
let x = [...A, "CLEARED"];
export function $$N11(e) {
  return A.includes(e);
}
let C = {
  CLEARED: A,
  PUBLISH_TEMPLATE_INITIATED: ["PUBLISH_TEMPLATE_COMPLETED", "PUBLISH_TEMPLATE_ERRORED"],
  PUBLISH_TEMPLATE_COMPLETED: x,
  PUBLISH_TEMPLATE_ERRORED: x,
  UNPUBLISH_TEMPLATE_INITIATED: ["UNPUBLISH_COMPLETED", "UNPUBLISH_ERRORED"],
  UNPUBLISH_HUB_FILE_INITIATED: ["UNPUBLISH_COMPLETED", "UNPUBLISH_ERRORED"],
  UNPUBLISH_COMPLETED: x,
  UNPUBLISH_ERRORED: x,
  PUBLISH_HUB_FILE_INITIATED: ["PUBLISH_HUB_FILE_COMPLETED", "PUBLISH_HUB_FILE_ERRORED"],
  PUBLISH_HUB_FILE_COMPLETED: x,
  PUBLISH_HUB_FILE_ERRORED: x
};
let w = eU({
  state: "CLEARED"
});
let $$O13 = eU(e => e(w).state);
let $$R16 = eU(e => {
  let t = e(w);
  return "PUBLISH_TEMPLATE_INITIATED" === t.state ? t.request : null;
});
let $$L18 = eU(null, (e, t, r) => {
  let n = e($$O13);
  let {
    state
  } = r;
  if (C[n].includes(state)) t(w, r);else throw Error(`Invalid state transition from ${n} to ${state}. Please check the state transition logic.`);
});
export function $$P6(e) {
  switch (e) {
    case "PUBLISH_TEMPLATE_ERRORED":
    case "PUBLISH_TEMPLATE_INITIATED":
      return "Cooper Team Template Publish";
    case "UNPUBLISH_TEMPLATE_INITIATED":
    case "UNPUBLISH_ERRORED":
      return "Cooper Team Template Unpublish";
    case "PUBLISH_HUB_FILE_ERRORED":
    case "PUBLISH_HUB_FILE_INITIATED":
      return "Cooper Hub File Publish";
    case "UNPUBLISH_HUB_FILE_INITIATED":
      return "Cooper Hub File Unpublish";
    default:
      return e;
  }
}
eU(null, (e, t) => t(w, {
  state: "CLEARED"
}));
export let $$D7 = Wh(() => eU(!1));
export const Co = $$m0;
export const EC = $$E1;
export const Ef = $$T2;
export const Fs = $$b3;
export const Hb = $$p4;
export const Hk = $$S5;
export const Jw = $$P6;
export const Ku = $$D7;
export const L1 = $$c8;
export const Lm = $$o9;
export const Lo = $$u10;
export const Md = $$N11;
export const Tw = $$l12;
export const UV = $$O13;
export const U_ = $$g14;
export const VW = $$v15;
export const WU = $$R16;
export const YA = $$s17;
export const _9 = $$L18;
export const az = $$_19;
export const ce = $$f20;
export const d2 = $$I21;
export const hc = $$h22;
export const mF = $$a23;
export const xB = $$y24;