import { um, eU } from "../figma_app/27355";
var $$r2 = (e => (e[e.PENDING = 0] = "PENDING", e[e.SUCCESS = 1] = "SUCCESS", e[e.FAILURE = 2] = "FAILURE", e))($$r2 || {});
let $$a0 = um([], (e, t) => {
  if (null == t) return e;
  if ("clear" === t) return [];
  let i = [];
  if (1 === t.networkState || 2 === t.networkState) {
    if (t.requestJsons.forEach(n => {
      let r = e.find(e => e.requestJson.figment_debugger_uuid === n.figment_debugger_uuid);
      null != r ? r.networkState = t.networkState : i.push(n);
    }), 0 === i.length) return e;
  } else 0 === t.networkState && (i = t.requestJsons);
  let n = 200 - (e.length + i.length);
  n < 0 && e.splice(e.length + n);
  return i.map(e => ({
    requestJson: e,
    networkState: t.networkState
  })).concat(e);
});
let $$s1 = eU(!1);
export const a4 = $$a0;
export const eE = $$s1;
export const tM = $$r2;