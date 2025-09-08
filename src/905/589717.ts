import { sessionLocalIDToString, isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
var $$n0;
var $$r1;
var $$a2;
export function $$o3(e, t) {
  let i = t.toGuidStrIfLocal(e);
  if (i) return $$r1.format(i);
  let n = t.toRefIfSubscribed(e);
  return n ? `${n.key.slice(0, 5)}...${n.key.slice(-5)}/${n.version}` : e;
}
($$n0 || ($$n0 = {})).fromString = function (e) {
  return e;
};
(e => {
  e.fromString = function (e) {
    return e;
  };
  e.fromKiwi = function (e) {
    return sessionLocalIDToString(e);
  };
  e.format = function (e) {
    return `(${e})`;
  };
  e.isValid = function (e) {
    return isValidSessionLocalID(parseSessionLocalID(e));
  };
})($$r1 || ($$r1 = {}));
(e => {
  e.fromKiwi = function (e) {
    return e.guids?.map($$r1.fromKiwi) ?? [];
  };
  e.fromStrings = function (e) {
    return e;
  };
  e.format = function (e) {
    return `[${e.map($$r1.format).join(", ")}]`;
  };
  e.isValid = function (e) {
    return e.length > 0 && e.every($$r1.isValid);
  };
})($$a2 || ($$a2 = {}));
export const SW = $$n0;
export const c1 = $$r1;
export const dB = $$a2;
export const r4 = $$o3;