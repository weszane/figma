import { atom } from "../figma_app/27355";
import { setupRemovableAtomFamily } from "../figma_app/615482";
var $$a11 = (e => (e.ALL = "ALL", e.ORG = "ORG", e.TEMPLATE = "TEMPLATE", e.HUB_FILE = "HUB_FILE", e.FILE_PICKER = "FILE_PICKER", e.TEMPLATE_PICKER = "TEMPLATE_PICKER", e.TEAM = "TEAM", e))($$a11 || {});
let $$s1 = setupRemovableAtomFamily(() => atom(!1));
let $$o10 = setupRemovableAtomFamily(() => atom(!1));
let $$l0 = setupRemovableAtomFamily(() => atom(!1));
let $$d13 = atom({
  type: "ALL"
});
let $$c7 = atom("");
let u = atom({});
let $$p6 = atom(e => e(u), (e, t, r, n) => {
  t(u, e => ({
    ...e,
    [r]: n
  }));
});
let $$_20 = atom(null, (e, t) => {
  t(u, {});
});
let $$h16 = atom(0);
export var $$m2 = (e => (e.PUBLISH_HUB_FILE_INITIATED = "PUBLISH_HUB_FILE_INITIATED", e.PUBLISH_HUB_FILE_COMPLETED = "PUBLISH_HUB_FILE_COMPLETED", e.PUBLISH_HUB_FILE_ERRORED = "PUBLISH_HUB_FILE_ERRORED", e.PUBLISH_TEMPLATE_INITIATED = "PUBLISH_TEMPLATE_INITIATED", e.PUBLISH_TEMPLATE_COMPLETED = "PUBLISH_TEMPLATE_COMPLETED", e.PUBLISH_TEMPLATE_ERRORED = "PUBLISH_TEMPLATE_ERRORED", e.UNPUBLISH_TEMPLATE_INITIATED = "UNPUBLISH_TEMPLATE_INITIATED", e.UNPUBLISH_HUB_FILE_INITIATED = "UNPUBLISH_HUB_FILE_INITIATED", e.UNPUBLISH_COMPLETED = "UNPUBLISH_COMPLETED", e.UNPUBLISH_TEMPLATE_ERRORED = "UNPUBLISH_ERRORED", e.CLEARED = "CLEARED", e))($$m2 || {});
let g = ["PUBLISH_HUB_FILE_INITIATED", "PUBLISH_TEMPLATE_INITIATED", "UNPUBLISH_TEMPLATE_INITIATED", "UNPUBLISH_HUB_FILE_INITIATED"];
let f = [...g, "CLEARED"];
export function $$E5(e) {
  return g.includes(e);
}
let y = {
  CLEARED: g,
  PUBLISH_TEMPLATE_INITIATED: ["PUBLISH_TEMPLATE_COMPLETED", "PUBLISH_TEMPLATE_ERRORED"],
  PUBLISH_TEMPLATE_COMPLETED: f,
  PUBLISH_TEMPLATE_ERRORED: f,
  UNPUBLISH_TEMPLATE_INITIATED: ["UNPUBLISH_COMPLETED", "UNPUBLISH_ERRORED"],
  UNPUBLISH_HUB_FILE_INITIATED: ["UNPUBLISH_COMPLETED", "UNPUBLISH_ERRORED"],
  UNPUBLISH_COMPLETED: f,
  UNPUBLISH_ERRORED: f,
  PUBLISH_HUB_FILE_INITIATED: ["PUBLISH_HUB_FILE_COMPLETED", "PUBLISH_HUB_FILE_ERRORED"],
  PUBLISH_HUB_FILE_COMPLETED: f,
  PUBLISH_HUB_FILE_ERRORED: f
};
let b = atom({
  state: "CLEARED"
});
let $$T12 = atom(e => e(b).state);
let $$I14 = atom(e => {
  let t = e(b);
  return "PUBLISH_TEMPLATE_INITIATED" === t.state ? t.request : null;
});
let $$S8 = atom(null, (e, t, r) => {
  let n = e($$T12);
  let {
    state
  } = r;
  if (y[n].includes(state)) t(b, r);else throw Error(`Invalid state transition from ${n} to ${state}. Please check the state transition logic.`);
});
export function $$v3(e) {
  switch (e) {
    case "PUBLISH_TEMPLATE_ERRORED":
    case "PUBLISH_TEMPLATE_INITIATED":
      return "Slides Team Template Publish";
    case "UNPUBLISH_TEMPLATE_INITIATED":
    case "UNPUBLISH_ERRORED":
      return "Slides Team Template Unpublish";
    case "PUBLISH_HUB_FILE_ERRORED":
    case "PUBLISH_HUB_FILE_INITIATED":
      return "Slides Hub File Publish";
    case "UNPUBLISH_HUB_FILE_INITIATED":
      return "Slides Hub File Unpublish";
    default:
      return e;
  }
}
export var $$A15 = (e => (e.ALL = "ALL", e.SINGLE = "SINGLE", e.NONE = "NONE", e))($$A15 || {});
let $$x19 = setupRemovableAtomFamily(() => atom(null));
let $$N17 = setupRemovableAtomFamily(() => atom(null));
let $$C9 = setupRemovableAtomFamily(() => atom({
  type: "NONE"
}));
let $$w4 = setupRemovableAtomFamily(() => atom(""));
let $$O18 = setupRemovableAtomFamily(() => atom(!1));
setupRemovableAtomFamily(() => atom(null));
export const DM = $$l0;
export const Ei = $$s1;
export const F4 = $$m2;
export const Jw = $$v3;
export const M0 = $$w4;
export const Md = $$E5;
export const Mt = $$p6;
export const OR = $$c7;
export const UM = $$S8;
export const V6 = $$C9;
export const VZ = $$o10;
export const Vf = $$a11;
export const _g = $$T12;
export const bY = $$d13;
export const cZ = $$I14;
export const i6 = $$A15;
export const ke = $$h16;
export const oQ = $$N17;
export const q7 = $$O18;
export const ux = $$x19;
export const xw = $$_20;