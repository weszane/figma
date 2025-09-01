import { fD } from "../905/753206";
export function $$r1(e) {
  let t = 0;
  let i = 0;
  let r = 0;
  let a = 0;
  e.parameters.forEach(e => {
    let n = !!e.optional;
    let s = !n;
    let o = !!e.allowFreeform;
    t += s ? 1 : 0;
    r += n ? 1 : 0;
    i += s && o ? 1 : 0;
    a += n && o ? 1 : 0;
  });
  return {
    pluginId: e.pluginId,
    pluginLocalFileId: e.pluginLocalFileId,
    command: e.command,
    source: e.pluginId ? "imported" : "development",
    displayName: e.displayName,
    paramCount: t + r,
    freeformParamCount: i + a,
    requiredParamCount: t,
    requiredFreeformParamCount: i,
    optionalParamCount: r,
    optionalFreeformParamCount: a,
    parameterOnly: e.parameterOnly,
    pluginRunID: fD(),
    triggeredFrom: e.triggeredFrom,
    qaVersion: e.qaVersion
  };
}
export function $$a0(e, t) {
  return e.reduce((e, i) => function (e, t, i) {
    var n;
    let r = !!i[t.key];
    let a = !!t.optional;
    let s = !a;
    n = {
      requiredCount: s ? 1 : 0,
      optionalCount: a ? 1 : 0,
      requiredEntered: r && s ? 1 : 0,
      optionalEntered: r && a ? 1 : 0,
      entered: r ? 1 : 0
    };
    return {
      requiredCount: e.requiredCount + n.requiredCount,
      optionalCount: e.optionalCount + n.optionalCount,
      requiredEntered: e.requiredEntered + n.requiredEntered,
      optionalEntered: e.optionalEntered + n.optionalEntered,
      entered: e.entered + n.entered
    };
  }(e, i, t), {
    requiredCount: 0,
    optionalCount: 0,
    requiredEntered: 0,
    optionalEntered: 0,
    entered: 0
  });
}
let $$s3 = "Parameter Entry Started";
let $$o2 = "Parameter Entry Finished";
export const O8 = $$a0;
export const ov = $$r1;
export const rj = $$o2;
export const yh = $$s3;